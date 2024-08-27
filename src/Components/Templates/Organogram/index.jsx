import React, { useState, useEffect, useRef } from 'react';
import equipeData from '../../../json/equipe.json'; 
import styles from "./index.module.scss";
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const generateRandomData = () => {
  const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  return data;
};

const formatarDataBrasileira = (dataISO) => {
  if (!dataISO) return '';
  const [year, month, day] = dataISO.split('-');
  return `${day}/${month}/${year}`;
};

const getIniciais = (nome) => {
  const nomes = nome.split(' ');
  const iniciais = nomes.map(n => n[0]).join('');
  return iniciais.toUpperCase();
};

const getAusenciaTagClass = (tipo) => {
  switch(tipo) {
    case 'Férias':
      return styles.tagFerias;
    case 'Treinamento':
      return styles.tagTreinamento;
    default:
      return '';
  }
};

const getAusenciaDotClass = (tipo) => {
  switch(tipo) {
    case 'Férias':
      return styles.dotFerias;
    case 'Treinamento':
      return styles.dotTreinamento;
    default:
      return '';
  }
};

const FuncionarioCard = ({ funcionario, position, onClose }) => {
  const cardRef = useRef(null);

  const cardStyle = {
    top: position.top - 150, 
    left: position.left - 50, 
    position: 'absolute',
    zIndex: 1000,
  };

  const randomData = generateRandomData();
  const randomDataBar = generateRandomData(3);

  const totalChamados = randomDataBar.reduce((acc, curr) => acc + curr, 0);

  const stat30Days = randomData[7];
  const stat60Days = randomData[8];
  const stat90Days = randomData[9];

  const data = {
    labels: ['30 Dias', '60 Dias', '90 Dias'],
    datasets: [
      {
        label: 'Resolução de Chamados',
        data: [stat30Days, stat60Days, stat90Days],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estatísticas de Resolução de Chamados',
      },
    },
  };

  const dataBar = {
    labels: ['N1', 'N2', 'N3'],
    datasets: [
      {
        label:"",
        data: randomDataBar,
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
      },
    ],
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

  const change30 = stat30Days - 85;
  const change60 = stat60Days - 80;
  const change90 = stat90Days - 75;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={cardRef} className={styles.card} style={cardStyle}>
      {funcionario.foto ? (
        <img src={funcionario.foto} alt={funcionario.nome} className={styles.cardImg} />
      ) : (
        <div className={styles.iniciaisCircle}>
          {getIniciais(funcionario.nome)}
        </div>
      )}
      <h2>{funcionario.nome}</h2>
      <p style={{ fontWeight: "700" }}>{funcionario.is}</p>
      <p>Atividade: <span>{funcionario.descricao_at}</span></p>
      <p>Senioridade: <span>{funcionario.senioridade}</span></p>
      <p>Especialidade: {funcionario.especialidade.join(', ')}</p>
      <br/>

      {funcionario.ausencia_ini && funcionario.ausencia_fin && (
        <>
          <p><span>Ausência: </span>{formatarDataBrasileira(funcionario.ausencia_ini)} até {formatarDataBrasileira(funcionario.ausencia_fin)}</p>
          <span className={`${styles.ausenciaTag} ${getAusenciaTagClass(funcionario.ausencia_tipo)}`}>
            {funcionario.ausencia_tipo}
          </span>
        </>
      )}
      <br/>
      <br/>

      <div className={styles.estatisticas}>
        <div className={styles.statContainer}>
          <div className={styles.statBox}>
            <p>30 Dias</p>
            <p className={styles.percentage}>{stat30Days}%</p>
            <p className={styles.change} style={{ color: change30 >= 0 ? 'green' : 'red' }}>
              {change30 >= 0 ? `+${change30}%` : `${change30}%`}
            </p>
          </div>
          <div className={styles.statBox}>
            <p>60 Dias</p>
            <p className={styles.percentage}>{stat60Days}%</p>
            <p className={styles.change} style={{ color: change60 >= 0 ? 'green' : 'red' }}>
              {change60 >= 0 ? `+${change60}%` : `${change60}%`}
            </p>
          </div>
          <div className={styles.statBox}>
            <p>90 Dias</p>
            <p className={styles.percentage}>{stat90Days}%</p>
            <p className={styles.change} style={{ color: change90 >= 0 ? 'green' : 'red' }}>
              {change90 >= 0 ? `+${change90}%` : `${change90}%`}
            </p>
          </div>
        </div>

        <div className={styles.chartContainer}>
          <Line data={data} options={options} />
        </div>

        <div className={styles.chartContainer}>
          <p className={styles.totalChamados}>Total de Chamados: {totalChamados}</p>
          <Bar data={dataBar} options={optionsBar} />
        </div>
      </div>
    </div>
  );
};

const Organograma = ({ equipe, onSelectFuncionario }) => {
  const agruparPorSenioridade = (equipe) => {
    const senioridades = {
      'CEO': [],
      'VP': [],
      'Gerente': [],
      'Expert': [],
      'Senior': [],
      'Pleno': [],
      'Junior': [],
      'Estagiário': [],
    };

    equipe.forEach((funcionario) => {
      if (senioridades[funcionario.senioridade]) {
        senioridades[funcionario.senioridade].push(funcionario);
      }
    });

    return senioridades;
  };

  const senioridadesAgrupadas = agruparPorSenioridade(equipe);

  return (
    <div className={styles.organograma}>
      {Object.entries(senioridadesAgrupadas).map(([titulo, funcionarios]) => (
        <div key={titulo} className={styles.senioridadeGroup}>
          <h2 className={styles.senioridadeTitulo}>{titulo}</h2>
          <div className={styles.funcionariosContainer}>
            {funcionarios.length > 0 ? (
              funcionarios.map((funcionario) => (
                <div
                  key={funcionario.id}
                  className={styles.funcionario}
                  onClick={(e) => onSelectFuncionario(funcionario, e)}
                >
                  {funcionario.foto ? (
                    <img src={funcionario.foto} alt={funcionario.nome} className={styles.cardImg} />
                  ) : (
                    <div className={styles.iniciaisCircle}>
                      {getIniciais(funcionario.nome)}
                    </div>
                  )}
                  <div>
                    <p>{funcionario.nome}
                      <span className={`${styles.ausenciaDot} ${getAusenciaDotClass(funcionario.ausencia_tipo)}`}></span>
                    </p>
                    <div>
                      <p style={{ color: "grey", marginTop: "5px" }}>{funcionario.senioridade}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum funcionário nesta categoria</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const OrganogramaPage = () => {
  const [selectedFuncionario, setSelectedFuncionario] = useState(null);
  const [equipe, setEquipe] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroId, setFiltroId] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const organogramaRef = useRef(null);

  useEffect(() => {
    setEquipe(equipeData.equipe);
  }, []);

  const handleSelectFuncionario = (funcionario, event) => {
    const boundingRect = organogramaRef.current.getBoundingClientRect();
    const top = event.clientY - boundingRect.top;
    const left = event.clientX - boundingRect.left;
    setPosition({ top, left });
    setSelectedFuncionario(funcionario);
  };

  const handleSearch = () => {
    return equipe.filter(funcionario => {
      const matchNome = funcionario.nome.toLowerCase().includes(filtroNome.toLowerCase());
      const matchId = funcionario.is.toString().includes(filtroId);
      return matchNome && matchId;
    });
  };

  const handleCloseCard = () => {
    setSelectedFuncionario(null);
  };

  return (
    <div className={styles.organogramaPage} ref={organogramaRef}>
      <h1>Organograma</h1>

      <div className={styles.filtroContainer}>
        <input
          type="text"
          placeholder="Nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
          className={styles.filtroInput}
        />
        <input
          type="text"
          placeholder="IS"
          value={filtroId}
          onChange={(e) => setFiltroId(e.target.value)}
          className={styles.filtroInput}
        />
      </div>

      <Organograma equipe={handleSearch()} onSelectFuncionario={handleSelectFuncionario} />

      {selectedFuncionario && (
        <FuncionarioCard 
          funcionario={selectedFuncionario} 
          position={position} 
          onClose={handleCloseCard} 
        />
      )}
    </div>
  );
};

export default OrganogramaPage;
