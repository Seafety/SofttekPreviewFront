import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';
import profileData from '../../../json/user.json';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const UserProfile = ({ userId }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const user = profileData.find((profile) => profile.id === userId);
    setUserInfo(user);
  }, [userId]);

  // Configuração dos dados do gráfico de linhas
  const data = {
    labels: ['30 Dias', '60 Dias', '90 Dias'],
    datasets: [
      {
        label: 'Performance',
        data: userInfo ? [userInfo.stat30Days, userInfo.stat60Days, userInfo.stat90Days] : [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.1
      }
    ]
  };

  // Configuração dos dados do gráfico de barras
  const dataBar = {
    labels: ['N1', 'N2', 'N3'],
    datasets: [
      {
        label: '',
        data: userInfo ? [userInfo.change30, userInfo.change60, userInfo.change90] : [],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance nos últimos 90 dias',
      },
    },
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Total de Chamados por Nível',
      },
    },
  };

  return (
    <div className={styles.userProfile}>
      <div onClick={toggleDropdown} className={styles.profileContainer}>
        <FontAwesomeIcon icon={faUserCircle} className={styles.userIcon} size="2x" />
        <div className={styles.userInfo}>
          <span className={styles.userName}>{userInfo ? userInfo.name : 'Usuário'}</span>
          <span className={styles.userSeniority}>{userInfo ? userInfo.seniority : 'Seniority'}</span>
        </div>
      </div>

      {showDropdown && userInfo && (
        <div className={styles.userDropdown} ref={dropdownRef}>
          <div className={styles.cardImgContainer}>
            {userInfo.photo ? (
              <img src={userInfo.photo} alt={userInfo.name} className={styles.cardImg} />
            ) : (
              <div className={styles.iniciaisCircle}>
                {userInfo.initials}
              </div>
            )}
          </div>
          <div className={styles.userIformation}>
          <h2 className={styles.dropdownTitle}>{userInfo.name}</h2>
          <p style={{ fontWeight: "700" }}>{userInfo.email}</p>
          <p>Endereço: <span>{userInfo.address}</span></p>
          <p>Telefone: <span>{userInfo.phone}</span></p>
          <p>Senioridade: <span>{userInfo.seniority}</span></p>
          <br /></div>

          {/* Gráficos */}
          <div className={styles.estatisticas}>
            <div className={styles.statContainer}>
              <div className={styles.statBox}>
                <p>30 Dias</p>
                <p className={styles.percentage}>{userInfo.stat30Days}%</p>
                <p className={styles.change} style={{ color: userInfo.change30 >= 0 ? 'green' : 'red' }}>
                  {userInfo.change30 >= 0 ? `+${userInfo.change30}%` : `${userInfo.change30}%`}
                </p>
              </div>
              <div className={styles.statBox}>
                <p>60 Dias</p>
                <p className={styles.percentage}>{userInfo.stat60Days}%</p>
                <p className={styles.change} style={{ color: userInfo.change60 >= 0 ? 'green' : 'red' }}>
                  {userInfo.change60 >= 0 ? `+${userInfo.change60}%` : `${userInfo.change60}%`}
                </p>
              </div>
              <div className={styles.statBox}>
                <p>90 Dias</p>
                <p className={styles.percentage}>{userInfo.stat90Days}%</p>
                <p className={styles.change} style={{ color: userInfo.change90 >= 0 ? 'green' : 'red' }}>
                  {userInfo.change90 >= 0 ? `+${userInfo.change90}%` : `${userInfo.change90}%`}
                </p>
              </div>
            </div>
            <div className={styles.chartContainer}>
              <Line data={data} options={options} />
            </div>
            <div className={styles.chartContainer}>
              <p className={styles.totalChamados}>Total de Chamados: {userInfo.totalChamados}</p>
              <Bar data={dataBar} options={optionsBar} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
