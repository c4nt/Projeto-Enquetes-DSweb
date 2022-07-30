from django.urls import path
from . import views

app_name = 'polls'

urlpatterns = [
    path('', views.HomeView.as_view(), name='homepage'),
    path('questoes/', views.IndexView.as_view(), name='questoes'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/votes', views.votes, name='votes'),
]