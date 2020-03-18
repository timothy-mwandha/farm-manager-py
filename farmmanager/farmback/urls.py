from rest_framework import routers
from .api import IncomeViewset

router = routers.DefaultRouter()
router.register('api/farmback', IncomeViewset, 'farmback')

urlpatterns = router.urls