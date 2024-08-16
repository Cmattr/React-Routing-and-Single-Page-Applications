import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
    const { characterId } = useParams(); // Get characterId from route parameters
    const [characterDetails, setCharacterDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}`, {
                    params: {
                        ts: '1',
                        apikey: '3c8d82e9011b075d7c2944801844a515',
                        hash: 'fe47f85e586754bc95a7724c6f529bae'
                    }
                });
                const character = response.data.data?.results[0];
                if (character) {
                    setCharacterDetails(character);
                } else {
                    setError('Character not found');
                }
            } catch (error) {
                setError('Error fetching character details');
                console.error('Error fetching character details:', error);
            }
        };

        if (characterId) {
            fetchCharacterDetails();
        }
    }, [characterId]);

    if (error) return <div>{error}</div>;
    if (!characterDetails) return <div>Loading...</div>;

    return (
        <div>
            <h2>{characterDetails.name}</h2>
            <p>{characterDetails.description || 'No description available.'}</p>
            <h3>Comics</h3>
            <ul>
                {characterDetails.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;