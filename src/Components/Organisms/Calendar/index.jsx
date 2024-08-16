import React from 'react';
import styles from '../Calendar/index.module.scss'

const Calendar = ({ monthData }) => {
    // Função para obter a cor com base no papel do consultor
    const getColor = (role) => {
      switch (role) {
        case 'estagiario':
          return '#E9AD52'; // Cor para estagiário
        case 'junior':
          return '#FF823D'; // Cor para júnior
        case 'pleno':
          return '#37FD05'; // Cor para pleno
        case 'senior':
          return '#A69AEA'; // Cor para sênior
        case 'expert':
          return '#6349FF'; // Cor para expert
        default:
          return '#F0F0F0'; // Cor padrão para dias sem papel específico
      }
    };
  
    return (
      <div className={styles.calendar}>
        {monthData.map((week, weekIndex) => (
          <div key={weekIndex} className={styles.week}>
            {week.map((day, dayIndex) => (
              <div 
                key={dayIndex}
                className={`${styles.day} ${styles[day.status]}`}
                style={{ backgroundColor: getColor(day.role) }}
                title={day.tooltip}
              >
                {day.date}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  

export default Calendar;
