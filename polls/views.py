from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404 , render
from django.urls import reverse
from django.views import generic

from .models import Choice, Question, Teste

class IndexView(generic.ListView) :
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'
    def get_queryset(self):
        return Question.objects.order_by('-pub_date')[:25]

    #latest_question_list = Question.objects.order_by('-pub_date')[:5]
    #context = {'latest_question_list': latest_question_list}
    #return render(request, 'polls/index.html', context)

class HomeView(generic.ListView) :
    model = Teste
    template_name = 'polls/homepage.html'



class DetailView(generic.DetailView) :
    model = Question
    template_name = 'polls/detail.html'

    #question = get_object_or_404(Question, pk=question_id)
    #return render(request,'polls/detail.html', {'question':question})

class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'

    #question = get_object_or_404(Question, pk=question_id)
    #return render(request, 'polls/results.html', {'question':question})

def votes(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'polls/detail.html', {
            'question':question, 'error_message':"Você não selecionou uma opção"
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('polls:results', args=(question_id,)))



