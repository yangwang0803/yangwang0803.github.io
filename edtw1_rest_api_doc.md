# EDTW Phase 1 REST API Documentation
Returns the phase 1 Estimated Delivery Time Window (EDTW)

## Resource URL
```
https://edtw1poc-comedic-cat.app.wtcdev2.paas.fedex.com/edtw/prediction
```
## Resouce infomation
* __Response format:__ JSON
* __Requires authentication?:__ Currently NO, future Yes
* __Rate limited?:__ Currently NO

## Method
```
POST
```

## Data Parameters
Name | Type | Required | Description
----|----|----|----
`station` | string | yes | Station ID, such as ‘NCQA’
`service_type` | string | yes | Service type, one of [‘fo’, ‘po’, ‘so’, ‘es’] 
`latitude` | double | yes | Latitude in decimal
`longitude` | double | yes | Longitude in decimal
`commit_dow` | string | yes | One of [‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’], ‘1’ means Monday
`commit_time` | integer | yes | Number of minutes elapsed since midnight, 630 means 10:30 am

## Success Response
* `code=200`: A JSON with the estimated delivery time window in “HH:MM” format.
```JSON
{"edtw1_left": "09:12", "edtw1_right": "10:45"}
```

* `code=200`: A JSON with the estimated delivery time window as null, menas no EDTW is available for the request.
```JSON
{"edtw1_left": null, "edtw1_right": null}
```
## Error Resonse
* `code=404`: Resource not found
* `code=401`: Unauthorized (not implemented yet)

## Sample call
* Shell
```
curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d '{"station":"NCQA","service_type":"po","latitude":33.93,"longitude":-84.34,"commit_dow":"1","commit_time":630}' edtw1poc-comedic-cat.app.wtcdev2.paas.fedex.com/edtw/prediction
```

* Python
```Python
import requests
url = 'http://edtw1poc-comedic-cat.app.wtcdev2.paas.fedex.com/edtw/prediction'
headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
data = {"station":"NCQA","service_type":"po" ,"latitude":33.93,"longitude":-84.34, "commit_dow":"1", "commit_time":630} = requests.post(url, json=data, headers=headers)
print(r.json())
```