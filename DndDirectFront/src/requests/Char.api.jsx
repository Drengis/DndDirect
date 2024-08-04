import LogininStore from '../cms/LogininStore';
import CharacteristicStore from '../cms/CharacteristicStore';
import BaseCharInfoStore from '../cms/BaseCharInfoStore';
import CharWeaponsStore from '../cms/CharWeaponsStore';
import PossessionsStore from '../cms/PossessionsStore';

const charQuery = async () => {
    function getIdFromUrl() {
        const url = new URL(window.location.href); // Переменная из url
        const pathParts = url.pathname.split('/'); // Сплитим по слешу
        const idIndex = pathParts.findIndex(part => part === 'info') + 1; // Элемент после info в запросе
        return pathParts[idIndex] || null;
    }
    // Функция нужна чтобы найти id персонажа без использования useParams

    const id = getIdFromUrl()
    try {
        const [CharacterResponse, SkillsResponse, WeaponsResponse] = await Promise.all([
            fetch(`http://127.0.0.1:8000/characters/get/${id}`, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            }),
            fetch(`http://127.0.0.1:8000/charactersskills/get/${id}`, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            }),
            fetch(`http://127.0.0.1:8000/charactersweapons/get/${id}`, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            }),
        ]);

        if (CharacterResponse.ok && SkillsResponse.ok && WeaponsResponse.ok) {
            const CharacterData = await CharacterResponse.json();
            const CharacterSkillsData = await SkillsResponse.json();
            const CharacterWeaponsData = await WeaponsResponse.json();

            CharacteristicStore.setCharecteristic(
                CharacterData.str, CharacterData.dex, CharacterData.con,
                CharacterData.int, CharacterData.wis, CharacterData.chr, CharacterData.possessionValue, CharacterSkillsData[0].savestr,
                CharacterSkillsData[0].savedex, CharacterSkillsData[0].savecon, CharacterSkillsData[0].saveint,
                CharacterSkillsData[0].savewis, CharacterSkillsData[0].savechr, CharacterSkillsData[0].acrobatics,
                CharacterSkillsData[0].analysis, CharacterSkillsData[0].athletics, CharacterSkillsData[0].perception,
                CharacterSkillsData[0].survival, CharacterSkillsData[0].performance, CharacterSkillsData[0].intimidation,
                CharacterSkillsData[0].history, CharacterSkillsData[0].hand, CharacterSkillsData[0].magic,
                CharacterSkillsData[0].medicine, CharacterSkillsData[0].deception, CharacterSkillsData[0].nature,
                CharacterSkillsData[0].insight, CharacterSkillsData[0].religion, CharacterSkillsData[0].stealth,
                CharacterSkillsData[0].persuasion, CharacterSkillsData[0].animals,
            );

            BaseCharInfoStore.setBaseInfo(
                CharacterData.id, CharacterData.name, CharacterData.charclass, CharacterData.race,
                CharacterData.history, CharacterData.worldview, CharacterData.level, CharacterData.experience,
                CharacterData.armorclass, CharacterData.initiative, CharacterData.speed, CharacterData.maxhp, CharacterData.temphp,
                CharacterData.nowhp, CharacterData.inventory, CharacterData.copper, CharacterData.silver, CharacterData.gold,
                CharacterData.electrum, CharacterData.platinum, CharacterData.rasepecul, CharacterData.classpecul, CharacterData.feature,
            );

            PossessionsStore.setPossessions(CharacterData.poss_weapons, CharacterData.poss_armors, CharacterData.poss_languages, CharacterData.poss_music_inst,
                CharacterData.poss_craft_inst, CharacterData.poss_others,)

            CharWeaponsStore.deleteWeapons()
            CharacterWeaponsData.forEach((weapon) => {
                CharWeaponsStore.addWeapon(weapon);
            });


        } else {
            console.error('Error fetching character data:', CharacterResponse.status, SkillsResponse.status);
        }
    } catch (error) {
        console.error('Error fetching character data:', error);
    }
};


export default charQuery;