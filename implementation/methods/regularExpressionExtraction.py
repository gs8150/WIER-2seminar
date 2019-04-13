import re
import json


# TODO implementation of data extraction using regex
def regularExpressionExtraction(input, pageType):

    data = {}
    id = 1
    # overstock regex extraction
    regex = r'<b>([0-9].+)<\/b>.*\n.*\n.*<s>([\$0-9,.]+).*\n.*<b>([\$0-9.]+).*\n.*>([\$0-9.,]+)\s.([0-9]+.).*\n.*\n.*<span class=\"normal\">(.*|.*\n.*\n.*|.*\n.*\n.*\n.*)<br/><a'
    matches = re.finditer(regex, input)

    for match in matches:

        # save retrieved data into dictionary
        item = {}

        if pageType == 0:                       # overstock
            title = match.group(1)   # title
            listPrice = match.group(2)   # listPrice
            price = match.group(3)   # price
            saving = match.group(4)   # saving
            savingPercent = match.group(5)   # saving %
            content = match.group(6)   # content

            item['Title'] = title
            item['listPrice'] = listPrice
            item['price'] = price
            item['saving'] = saving
            item['savingPercent'] = savingPercent
            item['content'] = content

        if pageType == 1:                       # rtvslo.si
            return "To be implemented"

        if pageType == 2:                       # custom
            return "To be implemented"


        # store item in dictionary
        data[id] = item
        id += 1

    # return json dump with pretty print + sorted entries
    return json.dumps(data, indent=4, sort_keys=True)
