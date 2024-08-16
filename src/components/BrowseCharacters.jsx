import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ characterName, onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
                    params: {
                        ts: '1',
                        apikey: '3c8d82e9011b075d7c2944801844a515',
                        hash: 'fe47f85e586754bc95a7724c6f529bae',
                        name: characterName
                    }
                });
                setCharacters(response.data.data?.results || []);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching data:', error);
            }
        };

        if (characterName) {
            fetchCharacters();
        }
    }, [characterName]);

    return (
        <div>
            <h3>Characters</h3>
            {error && <p>{error}</p>}
            {characters.length === 0 && !error && <p>No characters found</p>}
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            style={{ width: '100px', height: '100px' }}
                            onError={(e) => { e.target.src = 'fallback-image-url'; }} // Fallback image
                        />
                        <p>Name: {character.name}</p>
                        <button onClick={() => onCharacterSelect(character.id)}>Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
