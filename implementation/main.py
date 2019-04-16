from RoadRunnerExtraction import RoadRunnerExtraction
from XPathExtraction import XPathExtraction
from regularExpressionExtraction import regularExpressionExtraction
from bs4 import BeautifulSoup

pageType = 1    # 0 -> overstock, 1 -> rtvslo.si, 2 -> custom
HTMLsource = ""

try:
    overstockA = 'data/overstock.com/jewelry01.html'
    overstockB = 'data/overstock.com/jewelry02.html'
    rtvsloA = 'data/rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html'
    rtvsloB = 'data/rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html'
    with open(rtvsloA, "r", encoding="utf8") as f:
        page = f.read()
    HTMLsource = str(BeautifulSoup(page, 'html.parser'))
except Exception as error:
    print(error)
    exit(1)

# extract data using regular expressions
output_regex = regularExpressionExtraction(HTMLsource, pageType)

# extract data using XPath
output_XPath = XPathExtraction(HTMLsource, pageType)

# extract data using RoadRunner
output_roadRunner = RoadRunnerExtraction(HTMLsource, pageType)

# done
print(output_regex)
print(output_XPath)
##print(output_roadRunner)