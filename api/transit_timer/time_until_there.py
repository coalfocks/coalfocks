#from VehicleLocator import VehicleLocator
from FrontrunnerFinder import FrontrunnerFinder
from BusFinder import BusFinder

#vl = VehicleLocator()
#draper_station = 198022
#frontrunner = 750
#vl.get_ttd(stop_id=draper_station, route=frontrunner)

ff = FrontrunnerFinder()
result = ff.morning_commute()
print(result)
#ff.afternoon_commute(True)

#bf = BusFinder()
#bf.afternoon_commute(True)

