from .VehicleLocator import VehicleLocator

EAST_BAY = 830138
PAYSON_PROVO_STATION = 821
class BusFinder(VehicleLocator):

    def __init__(self):
        super().__init__()
        self.stop = EAST_BAY
        self.route = PAYSON_PROVO_STATION

    def afternoon_commute(self, test=False):
        return super().get_ttd(stop_id=self.stop, route=self.route, direction='Provo Central Station', test=test)
