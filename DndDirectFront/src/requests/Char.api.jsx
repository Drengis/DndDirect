import { useParams } from 'react-router-dom';
import LogininStore from '../cms/LogininStore';
import CharacteristicStore from '../cms/CharacteristicStore';
import BaseCharInfoStore from '../cms/BaseCharInfoStore';

const charQuery = async () => {
    const { id } = useParams();
    try {
        const response = await fetch(`http://127.0.0.1:8000/characters/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${LogininStore.token}`,
            },
        });
        const CharacterData = await response.json();
        CharacteristicStore.setCharecteristic(CharacterData.str, CharacterData.dex, CharacterData.con,
            CharacterData.int, CharacterData.wis, CharacterData.chr, CharacterData.possessionValue)
        BaseCharInfoStore.setBaseInfo(CharacterData.name, CharacterData.charclass, CharacterData.race,
            CharacterData.history, CharacterData.worldview, CharacterData.level, CharacterData.experience)

    } catch (error) {
        console.error('Error fetching character data:', error);
    }
};


export default charQuery;