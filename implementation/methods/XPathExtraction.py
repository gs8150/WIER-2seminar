from lxml import html
import json


# TODO implementation of data extraction using XPath
def XPathExtraction(input, pageType):
    # Form an XML tree using lxml library
    tree = html.fromstring(input)

    # titles = tree.xpath('//tr[contains(@bgcolor, "#ffffff") or contains(@bgcolor, "#dddddd")]/td[2]/a/b/text()')
    # for title in titles:
    #    print(title)

    data = {}
    id = 1

    # overstock regeXPathx extraction
    if pageType == 0:

        objects = tree.xpath('//tbody/tr[(contains(@bgcolor, "#ffffff") or contains(@bgcolor, "#dddddd")) and count(td[@valign="top"]) = 2]/td[2]')
        for obj in objects:
            item = {}
            title = obj.xpath('string(a/b/text())')
            listPrice = obj.xpath('string(table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/s/text())')
            price = obj.xpath('string(table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/span/b/text())')
            saving = obj.xpath('substring-before(table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span/text(), " ")')
            savingPercent = obj.xpath('substring(substring-after(table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/span/text(), " "),2 ,3)')
            content = obj.xpath('string(table/tbody/tr/td[2]/span/text())')

            item['Title'] = title
            item['listPrice'] = listPrice
            item['price'] = price
            item['saving'] = saving
            item['savingPercent'] = savingPercent
            item['content'] = content
            data[id] = item
            id += 1

    elif pageType == 2:                       # custom
        return "To be implemented"
    else:
        return "Unknown pageType"

    # return json dump with pretty print + sorted entries
    return json.dumps(data, indent=4, sort_keys=True)
