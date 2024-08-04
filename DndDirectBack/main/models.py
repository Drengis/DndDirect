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
        db_table = 'light_armors'


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
    armorclass = models.IntegerField()
    initiative = models.IntegerField()
    speed = models.IntegerField()
    maxhp = models.IntegerField(db_column= 'max_hp')
    temphp = models.IntegerField(db_column= 'temp_hp')
    nowhp = models.IntegerField(db_column= 'now_hp')
    inventory = models.TextField()
    copper = models.IntegerField()
    silver = models.IntegerField()
    gold = models.IntegerField()
    electrum = models.IntegerField()
    platinum = models.IntegerField()
    rasepecul = models.TextField()
    classpecul = models.TextField()
    feature = models.TextField()
    poss_weapons = models.TextField()
    poss_armors = models.TextField()
    poss_languages = models.TextField()
    poss_music_inst = models.TextField()
    poss_craft_inst = models.TextField()
    poss_others = models.TextField()

    class Meta:
        db_table = 'characters'
        
class CharactersSkills(models.Model):
    characters_id = models.IntegerField()
    savestr = models.IntegerField()
    savedex = models.IntegerField()
    savecon = models.IntegerField()
    saveint = models.IntegerField()
    savewis = models.IntegerField()
    savechr = models.IntegerField()
    acrobatics = models.IntegerField()
    analysis = models.IntegerField()
    athletics = models.IntegerField()
    perception = models.IntegerField()
    survival = models.IntegerField()
    performance = models.IntegerField()
    intimidation = models.IntegerField()
    history = models.IntegerField()
    hand = models.IntegerField()
    magic = models.IntegerField()
    medicine = models.IntegerField()
    deception = models.IntegerField()
    nature = models.IntegerField()
    insight = models.IntegerField()
    religion = models.IntegerField()
    stealth = models.IntegerField()
    persuasion = models.IntegerField()
    animals = models.IntegerField()

    class Meta:
        db_table = 'charskills'
        
class CharactersWeapons(models.Model):
    characters_id = models.IntegerField()
    name = models.TextField()
    modif = models.TextField()
    damage = models.TextField()
    
    class Meta:
        db_table = 'charweapons'