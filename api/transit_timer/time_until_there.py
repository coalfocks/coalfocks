#from VehicleLocator import VehicleLocator
from FrontrunnerFinder import FrontrunnerFinder
from BusFinder import BusFinder

#vl = VehicleLocator()
#draper_station = 198022
#frontrunner = 750
#vl.get_ttd(stop_id=draper_station, route=frontrunner)

ff = FrontrunnerFinder()
#ff.morning_commute(True)
#ff.afternoon_commute(True)

bf = BusFinder()
bf.afternoon_commute(True)

