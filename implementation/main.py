# TODO main implementation
from methods.RoadRunnerExtraction import RoadRunnerExtraction
from methods.XPathExtraction import XPathExtraction
from methods.regularExpressionExtraction import regularExpressionExtraction

inputData = "Path to html"

# beautify data using BS
# inputData = use_bs_library()

# extract data using regular expressions
output_regex = regularExpressionExtraction(inputData)

# extract data using XPath
output_XPath = XPathExtraction(inputData)

# extract data using RoadRunner
output_roadRunner = RoadRunnerExtraction(inputData)

# done
print(output_regex)
print(output_XPath)
print(output_roadRunner)
