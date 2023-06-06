from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=50, verbose_name="Título")
    type = models.CharField(max_length=50, verbose_name="Tipo de proyecto", default="Proyecto grupal")
    subtitle = models.CharField(max_length=200, verbose_name="Subtítulo")
    description = models.TextField(verbose_name="Descripción")
    image = models.ImageField(upload_to='projects', verbose_name="Imagen")
    url_deploy = models.URLField(verbose_name="Deploy", null= True, blank= True)
    url_repo = models.URLField(verbose_name="Repositorio", null= True, blank= True)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'