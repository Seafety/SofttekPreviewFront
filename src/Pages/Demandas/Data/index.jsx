import React from "react";
import DashSection from "../../../Components/Templates/DashSectionTemplate";
import Table from "../../../Components/Organisms/Table";
import Status from "../../../Components/Atoms/Status";
import styles from "../../../Components/Templates/DemandasTemplate/index.module.scss"
import OpenTickets from "../../../Components/Organisms/OpenTickets";

const Data = () => {

  const table1Headers = ['ID', 'Nome', 'Módulo', 'Senioridade' ];
  const table1Data = [
    ['DFLD', 'Daniel Ferreira', 'Qualidade', 'Senior' ],
    ['NSRL', 'Catarina Cardoso', 'Qualidade', 'Senior' ],
  ];

  const table2Headers = ['Tickets', 'Nome', 'Módulo', 'Senioridade', 'Situação'];
  const table2Data = [
    ['175', 'Ithalo Santos', 'Infra +', 'Estagiário', 'critico'],
    ['97', 'Michel Santos', 'Infra', 'Junior', 'critico'],
    ['50', 'João Silva', 'Compras +', 'Pleno', 'anormal'],
    ['49', 'Marcio  Bolots', 'Financeiro +', 'Senior', 'anormal'],
    ['...', '...', '...', '...', '...'],
    ['1', 'Jocelyn Gion', 'Vendas', 'Senior', 'normal'],
  ];

  const formattedTable2Data = table2Data.map(row => [
    row[0],
    row[1],
    row[2],
    row[3],
    <Status status={row[4]} /> 
  ]);

  const chamados = [
    {
      dateTime: '24/08/2024 09:48:02',
      level: 'N3',
      project: 'Projeto_01',
      task: 'TASK105597715-1',
      department: 'Vendas',
      hours: '2,8',
      status: 'up',
    },
    {
      dateTime: '22/08/2024 15:28:12',
      level: 'N2',
      project: 'Projeto_01',
      task: 'TASK105721218-1',
      department: 'Compras',
      hours: '0,5',
      status: 'up',
    },
    {
      dateTime: '22/08/2024 16:12:08',
      level: 'N1',
      project: 'Projeto_01',
      task: 'TASK10572364-1',
      department: 'Infra',
      hours: '1,6',
      status: 'neutral',
    },
    {
      dateTime: '24/08/2024 09:48:02',
      level: 'N1',
      project: 'Projeto_01',
      task: 'TASK105595614-2',
      department: 'Qualidade',
      hours: '0,7',
      status: 'down',
    },
    {
      dateTime: '22/08/2024 16:12:08',
      level: 'N2',
      project: 'Projeto_01',
      task: 'TASK10572364-1',
      department: 'Infra',
      hours: '1,6',
      status: 'neutral',
    },
    {
      dateTime: '24/08/2024 09:48:02',
      level: 'N3',
      project: 'Projeto_01',
      task: 'TASK105595614-2',
      department: 'Qualidade',
      hours: '0,7',
      status: 'down',
    },
    {
      dateTime: '24/08/2024 09:48:02',
      level: 'N3',
      project: 'Projeto_01',
      task: 'TASK105597715-1',
      department: 'Vendas',
      hours: '2,8',
      status: 'up',
    },
  ];

  return (
    <>
      <div className={styles.dashSectionSmall}>
      <DashSection title="Consultores disponíveis">
        <Table headers={table1Headers} data={table1Data} />
      </DashSection> 
      </div>
      <div className={styles.dashSectionLarge}> 
      <DashSection title="Chamados abertos">
        <OpenTickets chamados={chamados} />
      </DashSection>
      </div>
      <div className={styles.dashSectionLarge}>
      <DashSection title="Chamados por Colaborador">
        <Table headers={table2Headers} data={formattedTable2Data} />
      </DashSection>
      </div>
      <div className={styles.dashSectionSmall}>
      <DashSection title="Tickets por criticidade">
      </DashSection>
      </div>
    </>
  );
};

export default Data;
