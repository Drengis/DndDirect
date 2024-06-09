from django.db import models
from django.contrib.auth.models import User

class SimpleWeapons(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    damage = models.CharField(max_length=64)
    options = models.CharField(max_length=64)

    class Meta:
        db_table = 'simple_weapons'


class MilitaryWeapons(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    damage = models.CharField(max_length=64)
    options = models.CharField(max_length=64)

    class Meta:
        db_table = 'military_weapons'


class LightArmors(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    armorclass = models.CharField(max_length=64)
    strength = models.CharField(max_length=64)
    stealth = models.CharField(max_length=64)

    class Meta:
        db_table = 'light_armor'


class MediumArmors(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    armorclass = models.CharField(max_length=64)
    strength = models.CharField(max_length=64)
    stealth = models.CharField(max_length=64)

    class Meta:
        db_table = 'medium_armor'


class HeavyArmors(models.Model):
    name = models.CharField(max_length=64)
    price = models.IntegerField()
    armorclass = models.CharField(max_length=64)
    strength = models.CharField(max_length=64)
    stealth = models.CharField(max_length=64)

    class Meta:
        db_table = 'heavy_armor'


class Spells(models.Model):
    name = models.TextField()
    level = models.IntegerField()
    school = models.TextField()
    castingtime = models.TextField()
    range = models.TextField()
    materials = models.TextField()
    components = models.TextField()
    duration = models.TextField()
    text = models.TextField()
    ritual = models.BooleanField()

    class Meta:
        db_table = 'spells'
        
class Сharacters(models.Model):
    name = models.TextField()
    charclass = models.TextField()
    race = models.TextField()
    level = models.IntegerField()
    worldview = models.TextField()
    history = models.TextField()
    experience = models.IntegerField()
    str = models.IntegerField()
    dex = models.IntegerField()
    con = models.IntegerField()
    int = models.IntegerField()
    wis = models.IntegerField()
    chr = models.IntegerField()
    possessionValue = models.IntegerField(db_column='possession_value')
    

    class Meta:
        db_table = 'characters'