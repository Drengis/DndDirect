import { useParams } from 'react-router-dom';
import LogininStore from '../cms/LogininStore';
import CharacteristicStore from '../cms/CharacteristicStore';
import BaseCharInfoStore from '../cms/BaseCharInfoStore';

const charQuery = async () => {
    const { id } = useParams();
    try {
        const [CharacterResponse, SkillsResponse] = await Promise.all([
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
        ]);

        if (CharacterResponse.ok && SkillsResponse.ok) {
            const CharacterData = await CharacterResponse.json();
            const CharacterSkillsData = await SkillsResponse.json();


            CharacteristicStore.setCharecteristic(
                CharacterData.str, CharacterData.dex, CharacterData.con,
                CharacterData.int, CharacterData.wis, CharacterData.chr, CharacterData.possessionValue, CharacterSkillsData[0].savestr,
                CharacterSkillsData[0].savedex, CharacterSkillsData[0].savecon, CharacterSkillsData[0].saveint,
                CharacterSkillsData[0].savewis, CharacterSkillsData[0].savechr,
            );

            BaseCharInfoStore.setBaseInfo(
                CharacterData.id, CharacterData.name, CharacterData.charclass, CharacterData.race,
                CharacterData.history, CharacterData.worldview, CharacterData.level, CharacterData.experience
            );
        } else {
            console.error('Error fetching character data:', CharacterResponse.status, SkillsResponse.status);
        }
    } catch (error) {
        console.error('Error fetching character data:', error);
    }
};


export default charQuery;