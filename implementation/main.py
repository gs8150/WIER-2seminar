from methods.RoadRunnerExtraction import RoadRunnerExtraction
from methods.XPathExtraction import XPathExtraction
from methods.regularExpressionExtraction import regularExpressionExtraction
from bs4 import BeautifulSoup


overstockA = 'data/overstock.com/jewelry01.html'
overstockB = 'data/overstock.com/jewelry02.html'
rtvsloA = 'data/rtvslo.si/Audi A6 50 TDI quattro_ nemir v premijskem razredu - RTVSLO.si.html'
rtvsloB = 'data/rtvslo.si/Volvo XC 40 D4 AWD momentum_ suvereno med najboljše v razredu - RTVSLO.si.html'
neweggA = 'data/newegg.com/Desktop Processors and CPUs - Newegg.com.htm'
neweggB = 'data/newegg.com/Desktop Graphics Cards, Video Cards for PC - Newegg.com.htm'

# to change other page, change this variable only
pageSource = neweggB  # rtvsloA, rtvsloB, overstockA, overstockB, neweggA, neweggB
# -------------------------------------------------

try:
    # pageType calculation
    if 'overstock' in pageSource:
        pageType = 0
    elif 'rtvslo' in pageSource:
        pageType = 1
    elif 'newegg' in pageSource:
        pageType = 2
    else:
        print('Invalid page source!')
        exit(1)

    # obtain HTML code
    htmlObject = open(pageSource, 'rb') if pageType == 1 or 2 else open(pageSource, 'r')
    page = htmlObject.read()
    HTMLsource = str(BeautifulSoup(page, 'html.parser'))
except Exception as error:
    print(error)
    exit(1)

# extract data using regular expressions
output_regex = regularExpressionExtraction(HTMLsource, pageType)

# extract data using XPath
output_XPath = XPathExtraction(HTMLsource, pageType)

# extract data using RoadRunner
output_roadRunner = RoadRunnerExtraction(neweggA, neweggB, pageType)

# done
print(output_regex)
print(output_XPath)
##print(output_roadRunner)
