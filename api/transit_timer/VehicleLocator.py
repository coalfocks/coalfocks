import requests
import json
import os
import xmltodict as xmld

TOKEN = os.environ['UTA_TOKEN']
class VehicleLocator:

    def __init__(self):
        self.token = TOKEN
        #self.test_xml = '<?xml version="1.0" encoding="utf-8"?><Siri version="1.3" xmlns="http://www.siri.org.uk/siri"><ResponseTimestamp>2018-10-24T17:50:31.5796824-06:00</ResponseTimestamp><StopMonitoringDelivery version="1.3"><ResponseTimestamp>2018-10-24T17:50:31.5796824-06:00</ResponseTimestamp><ValidUntil>2018-10-24T17:50:41.5796824-06:00</ValidUntil><MonitoredStopVisit><RecordedAtTime>2018-10-24T17:50:31.5796824-06:00</RecordedAtTime><MonitoredVehicleJourney><LineRef>750</LineRef><DirectionRef>NORTHBOUND</DirectionRef><FramedVehicleJourneyRef><DataFrameRef>2018-10-24T00:00:00-06:00</DataFrameRef><DatedVehicleJourneyRef>3559371</DatedVehicleJourneyRef></FramedVehicleJourneyRef><PublishedLineName>FRONTRUNNER</PublishedLineName><OriginRef>801164</OriginRef><DestinationRef>601084</DestinationRef><Monitored>True</Monitored><VehicleLocation><Longitude>-111.89979</Longitude><Latitude>40.42843</Latitude></VehicleLocation><ProgressRate>1</ProgressRate><CourseOfJourneyRef>18139</CourseOfJourneyRef><VehicleRef>114</VehicleRef><MonitoredCall><StopPointRef>301081</StopPointRef><VisitNumber>1</VisitNumber><VehicleAtStop>false</VehicleAtStop><Extensions><EstimatedDepartureTime>503</EstimatedDepartureTime><Direction>To Ogden</Direction><Distance>31819.125013997469</Distance></Extensions></MonitoredCall><Extensions><LastGPSFix>2018-10-24T17:50:23</LastGPSFix><Scheduled>False</Scheduled><Bearing>322.50771076548835</Bearing><Speed>36.804660188204025</Speed><DestinationName>Ogden</DestinationName></Extensions></MonitoredVehicleJourney><MonitoredVehicleJourney><LineRef>750</LineRef><DirectionRef>SOUTHBOUND</DirectionRef><FramedVehicleJourneyRef><DataFrameRef>2018-10-24T00:00:00-06:00</DataFrameRef><DatedVehicleJourneyRef>3559405</DatedVehicleJourneyRef></FramedVehicleJourneyRef><PublishedLineName>FRONTRUNNER</PublishedLineName><OriginRef>601084</OriginRef><DestinationRef>801164</DestinationRef><Monitored>True</Monitored><VehicleLocation><Longitude>-111.90832</Longitude><Latitude>40.722263</Latitude></VehicleLocation><ProgressRate>1</ProgressRate><CourseOfJourneyRef>18140</CourseOfJourneyRef><VehicleRef>111</VehicleRef><MonitoredCall><StopPointRef>801160</StopPointRef><VisitNumber>1</VisitNumber><VehicleAtStop>false</VehicleAtStop><Extensions><EstimatedDepartureTime>1234</EstimatedDepartureTime><Direction>To Provo</Direction><Distance>75526.18538738729</Distance></Extensions></MonitoredCall><Extensions><LastGPSFix>2018-10-24T17:50:22</LastGPSFix><Scheduled>False</Scheduled><Bearing>179.12459681363327</Bearing><Speed>49.409137944252542</Speed><DestinationName>Provo</DestinationName></Extensions></MonitoredVehicleJourney></MonitoredStopVisit><Extensions><StopName>DRAPER STATION</StopName><StopLongitude>-111.904407000</StopLongitude><StopLatitude>40.515484000</StopLatitude><StopLocation>Utah</StopLocation></Extensions></StopMonitoringDelivery></Siri>'
        self.test_xml = '<?xml version="1.0" encoding="utf-8"?><Siri version="1.3" xmlns="http://www.siri.org.uk/siri"><ResponseTimestamp>2018-10-25T17:36:01.3431218-06:00</ResponseTimestamp><StopMonitoringDelivery version="1.3"><ResponseTimestamp>2018-10-25T17:36:01.3431218-06:00</ResponseTimestamp><ValidUntil>2018-10-25T17:36:11.3431218-06:00</ValidUntil><MonitoredStopVisit><RecordedAtTime>2018-10-25T17:36:01.3431218-06:00</RecordedAtTime><MonitoredVehicleJourney><LineRef>821</LineRef><DirectionRef>NB TO PROVO STN</DirectionRef><FramedVehicleJourneyRef><DataFrameRef>2018-10-25T00:00:00-06:00</DataFrameRef><DatedVehicleJourneyRef>3537010</DatedVehicleJourneyRef></FramedVehicleJourneyRef><PublishedLineName>SOUTH COUNTY- PROVO CENTRAL STATION</PublishedLineName><OriginRef>828002</OriginRef><DestinationRef>801280</DestinationRef><Monitored>True</Monitored><VehicleLocation><Longitude>-111.65829</Longitude><Latitude>40.21475</Latitude></VehicleLocation><ProgressRate>1</ProgressRate><CourseOfJourneyRef>5518</CourseOfJourneyRef><VehicleRef>07024</VehicleRef><MonitoredCall><StopPointRef>820093</StopPointRef><VisitNumber>1</VisitNumber><VehicleAtStop>false</VehicleAtStop><Extensions><EstimatedDepartureTime>21</EstimatedDepartureTime><Direction>Provo Central Station</Direction><Distance>38847583.179807641</Distance></Extensions></MonitoredCall><Extensions><LastGPSFix>2018-10-25T17:35:55.587</LastGPSFix><Scheduled>False</Scheduled><Bearing>274</Bearing><Speed>23.8791</Speed><DestinationName>Provo Central Station</DestinationName></Extensions></MonitoredVehicleJourney></MonitoredStopVisit><Extensions><StopName>EAST BAY BLVD @ 139 E</StopName><StopLongitude>-111.656328000</StopLongitude><StopLatitude>40.214762000</StopLatitude><StopLocation>Utah</StopLocation></Extensions></StopMonitoringDelivery></Siri>'

    def get_location(self, stop):
        # get all vehicles
        # get closest to stop
        # return lat, long
        pass

    def get_vehicles(self, route, destination='Provo'):
        base_url = 'https://webapi.rideuta.com/api/VehicleLocation/{}'.format(route)

    def get_ttd(self, stop_id, route, direction='Provo', test=False):
        url ='http://api.rideuta.com/SIRI/SIRI.svc/StopMonitor?stopid={}&minutesout=25&onwardcalls=false&filterroute={}&usertoken={}'.format(stop_id, route, self.token)
        if not test:
            res = requests.get(url)
            # decode xml
            doc = xmld.parse(res.text)
        else:
            doc = xmld.parse(self.test_xml)
        #print (json.dumps(doc['Siri']['StopMonitoringDelivery']['MonitoredStopVisit']['MonitoredVehicleJourney']))
        vehicles = doc['Siri']['StopMonitoringDelivery']['MonitoredStopVisit']
        if 'MonitoredVehicleJourney' not in vehicles:
            try:
                stop_name = doc['Siri']['StopMonitoringDelivery']['Extensions']['StopName']
            except:
                stop_name = 'stop'
            return ['No vehicles departing from {} direction {} within 25 minutes at this time.'.format(stop_name, direction)]
        if (type(vehicles['MonitoredVehicleJourney']) is not list):
            vehicles['MonitoredVehicleJourney'] = [vehicles['MonitoredVehicleJourney']]
        results = []
        for vehicle in vehicles['MonitoredVehicleJourney']:
            if vehicle['Extensions']['DestinationName'] == direction:
                try:
                    v_no = vehicle['VehicleRef']
                    stop_name = doc['Siri']['StopMonitoringDelivery']['Extensions']['StopName']
                    time = int( vehicle['MonitoredCall']['Extensions']['EstimatedDepartureTime'] )
                    minutes = int( time / 60 )
                    seconds = time % 60
                    result =  'vehicle {} to {} will arrive at {} in {} minutes and {} seconds'.format(v_no, direction, stop_name, minutes, seconds)
                except:
                    if vehicle['MonitoredCall']['Extensions']['EstimatedDepartureTime'] is not None:
                        time = int( vehicle['MonitoredCall']['Extensions']['EstimatedDepartureTime'] )
                        minutes = int( time / 60 )
                        seconds = time % 60
                    else:
                        v_no = vehicle['VehicleRef']
                        minutes = 'a few'
                        seconds = 'some'
                    result = 'Vehicle {} will arrive in {} minutes and {} seconds'.format(v_no, minutes, seconds)
                #print( result )
                results.append(result)
            else:
                print('wrong way')
                print(vehicle)
        print ('there were {} results'.format(len(results)))
        return results
                
