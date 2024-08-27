import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import stickyNote from "../../../Assets/sticky-note.svg";

const AnnotationBox = ({ contractId }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [annotation, setAnnotation] = useState('');

    useEffect(() => {
        const savedAnnotation = localStorage.getItem(`annotation_${contractId}`);
        if (savedAnnotation) {
            setAnnotation(savedAnnotation);
        } else {
            setAnnotation(''); 
        }
    }, [contractId]);

    const handleSave = () => {
        localStorage.setItem(`annotation_${contractId}`, annotation);
        setIsEditing(false); 
    };

    const handleChange = (event) => {
        setAnnotation(event.target.value);
    };

    return (
        <div className={styles.annotationBox}>
            {isEditing ? (
                <>
                    <textarea
                        value={annotation}
                        onChange={handleChange}
                        placeholder="Escreva uma anotação sobre o contrato..."
                        className={styles.textArea}
                    />
                    <button onClick={handleSave} className={styles.saveButton}>
                        Salvar
                    </button>
                </>
            ) : (
                <p onClick={() => setIsEditing(true)} className={styles.annotationText}>
                    {annotation || 'Escreva uma anotação sobre o contrato...'}
                </p>
            )}
            <button onClick={() => setIsEditing(true)} className={styles.editButton}>
                <img src={stickyNote} alt="Edit" />
            </button>
        </div>
    );
};

export default AnnotationBox;
