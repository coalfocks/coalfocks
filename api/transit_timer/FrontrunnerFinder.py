from .VehicleLocator import VehicleLocator

DRAPER_STATION = 'FR198022'
FRONTRUNNER = 750
class FrontrunnerFinder(VehicleLocator):

    def __init__(self):
        super().__init__()
        self.stop = DRAPER_STATION
        self.route = FRONTRUNNER

    def morning_commute(self):
        return super().get_ttd(stop_id=self.stop, route=self.route, direction='Provo')

    def afternoon_commute(self):
        return super().get_ttd(stop_id=self.stop, route=self.route, direction='Ogden')
