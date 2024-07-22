import LogininStore from '../cms/LogininStore';
import CharWeaponsStore from '../cms/CharWeaponsStore';

const weaponsQuery = async (id) => {
    try {
        const [WeaponsResponse] = await Promise.all([
            fetch(`http://127.0.0.1:8000/charactersweapons/get/${id}`, {
                headers: {
                    'Authorization': `Bearer ${LogininStore.token}`,
                },
            }),
        ]);

        if (WeaponsResponse.ok) {
            const CharacterWeaponsData = await WeaponsResponse.json();
            CharWeaponsStore.deleteWeapons()
            CharacterWeaponsData.forEach((weapon) => {
                CharWeaponsStore.addWeapon(weapon);
            });
        } else {
            console.error('Error fetching character data:', WeaponsResponse.status);
        }
    } catch (error) {
        console.error('Error fetching character data:', error);
    }
};

export default weaponsQuery;