# TODO main implementation
from methods.RoadRunnerExtraction import RoadRunnerExtraction
from methods.XPathExtraction import XPathExtraction
from methods.regularExpressionExtraction import regularExpressionExtraction
from selenium.common.exceptions import WebDriverException, TimeoutException
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from bs4 import BeautifulSoup


# selenium driver configuration
chrome_options = Options()
chrome_options.add_argument('--disable-browser-side-navigation')
chrome_options.headless = True
driver = webdriver.Chrome(options=chrome_options)
driver.set_page_load_timeout(20)  # wait 20 seconds, move to next url after timeout
# wait 3 secs for web to load
driver.implicitly_wait(3)

pageType = 0    # 0 -> overstock, 1 -> rtvslo.si, 2 -> custom
overstockA = "file:///C:/Users/susni/PycharmProjects/WIER-2seminar/implementation/data/overstock.com/jewelry01.html"
overstockB = "file:///C:/Users/susni/PycharmProjects/WIER-2seminar/implementation/data/overstock.com/jewelry02.html"
HTMLsource = ""

# use selenium and bs to build html source
# TODO selenium? or just load local file -> pageContent = open('Golf8.html', 'r').read()
try:
    driver.get(overstockA)
    # driver.get(overstockB)
    HTMLsource = str(BeautifulSoup(driver.page_source, 'html.parser'))

except (WebDriverException, TimeoutException) as error:
    print(error)
    exit(1)
finally:
    driver.quit()

# extract data using regular expressions
output_regex = regularExpressionExtraction(HTMLsource, pageType)

# extract data using XPath
output_XPath = XPathExtraction(HTMLsource, pageType)

# extract data using RoadRunner
output_roadRunner = RoadRunnerExtraction(HTMLsource, pageType)

# done
print(output_regex)
print(output_XPath)
print(output_roadRunner)
