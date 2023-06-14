from django.db import models

# Create your models here.
class Technology(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    icon_link = models.CharField(max_length=50, verbose_name="Enlace")


    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Tecnología"
        verbose_name_plural = "Tecnologías"
        ordering = ["name"]

class Project(models.Model):
    title = models.CharField(max_length=50, verbose_name="Título")
    type = models.CharField(max_length=50, verbose_name="Tipo de proyecto", default="Proyecto grupal")
    subtitle = models.CharField(max_length=200, verbose_name="Subtítulo")
    description = models.TextField(verbose_name="Descripción")
    image = models.ImageField(upload_to='projects', verbose_name="Imagen", null=True, blank=True)
    url_deploy = models.URLField(verbose_name="Deploy", null= True, blank= True)
    url_repo = models.URLField(verbose_name="Repositorio", null= True, blank= True)
    technologies = models.ManyToManyField(Technology, verbose_name="Tecnologías")

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'
