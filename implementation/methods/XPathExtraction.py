from lxml import html


# TODO implementation of data extraction using XPath
def XPathExtraction(input, pageType):
    # Form an XML tree using lxml library
    tree = html.fromstring(input)

    titles = tree.xpath('//tr[contains(@bgcolor, "#ffffff") or contains(@bgcolor, "#dddddd")]/td[2]/a/b/text() | todo price etc')
    for title in titles:
        print(title)


    return ""
