import re
import json


# TODO implementation of data extraction using regex
def regularExpressionExtraction(input, pageType):
    data = {}
    id = 1
    # overstock regex extraction
    if pageType == 0:
        regex = r'<b>([0-9].+)<\/b>.*\n.*\n.*<s>([\$0-9,.]+).*\n.*<b>([\$0-9.]+).*\n.*>([\$0-9.,]+)\s.([0-9]+.).*\n.*\n.*<span class=\"normal\">(.*|.*\n.*\n.*|.*\n.*\n.*\n.*)<br/><a'
    elif pageType == 1:
        # single full match no context field
        regex = r'<h1>(.*)</h1>[\s\S]+<div class=\"subtitle\">(.*)</div>[\s\S]+<p class=\"lead\">(.*)</p>[\s\S]+<div class=\"author-name\">(.*)</div>[\s\S]+\"publish-meta\">[\n\W]+(.*)<br/>'
        # mulltimatch
        # regex = r'<h1>(.*)</h1>|<div class=\"subtitle\">(.*)</div>|<p class=\"lead\">(.*)</p>|<div class=\"author-name\">(.*)</div>|\"publish-meta\">[\n\W]+(.*)<br/>|<p class=\"Body\">([\w\-,.\s–čšž\/ŠČŽ\"]+)<\/p>|<strong>([\w\-,.\s–čšž\/ŠČŽ\"<>]+)<\/p>'
    elif pageType == 2:
        regex = r''
    else:
        return "No regex specified!"

    matches = re.finditer(regex, input)
    for match in matches:
        # save retrieved data into dictionary
        item = {}

        if pageType == 0:                       # overstock
            title = match.group(1)              # title
            listPrice = match.group(2)          # listPrice
            price = match.group(3)              # price
            saving = match.group(4)             # saving
            savingPercent = match.group(5)      # saving %
            content = match.group(6)            # content

            item['Title'] = title
            item['listPrice'] = listPrice
            item['price'] = price
            item['saving'] = saving
            item['savingPercent'] = savingPercent
            item['content'] = content

        elif pageType == 1:                     # rtvslo.si
            title = match.group(1)              # title
            subTitle = match.group(2)           # subTitle
            lead = match.group(3)               # lead
            author = match.group(4)             # author
            publishTime = match.group(5)        # publishTime
            #content = match.group(6)            # content

            item['Title'] = title
            item['SubTitle'] = subTitle
            item['Lead'] = lead
            item['Author'] = author
            item['PublishTime'] = publishTime
            #item['content'] = content

        elif pageType == 2:                       # custom
            return "To be implemented"
        else:
            return "Unknown pageType"

        # store item in dictionary
        data[id] = item
        id += 1

    # return json dump with pretty print + sorted entries
    return json.dumps(data, indent=4, sort_keys=True)
