-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/05/2024 às 21:48
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbchamadordesenhas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbguiche`
--

CREATE TABLE `tbguiche` (
  `idGuiche` int(11) NOT NULL,
  `nomeGuiche` varchar(10) DEFAULT NULL,
  `idSala` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbguiche`
--

INSERT INTO `tbguiche` (`idGuiche`, `nomeGuiche`, `idSala`) VALUES
(1, 'Guichê 01', 1),
(2, 'Guichê 02', 1),
(3, 'Guichê 03', 1),
(4, 'Guichê 01', 2),
(5, 'Guichê 02', 2),
(6, 'Guichê 03', 2),
(7, 'Guichê 01', 3),
(8, 'Guichê 02', 3),
(9, 'Guichê 03', 3),
(10, 'Guichê 01', 4),
(11, 'Guichê 02', 4),
(12, 'Guichê 03', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbsala`
--

CREATE TABLE `tbsala` (
  `idSala` int(11) NOT NULL,
  `nomeSala` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tbsala`
--

INSERT INTO `tbsala` (`idSala`, `nomeSala`) VALUES
(1, 'Sala 01'),
(2, 'Sala 02'),
(3, 'Sala 03'),
(4, 'Sala 04');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbsenha`
--

CREATE TABLE `tbsenha` (
  `idSenha` int(11) NOT NULL,
  `senha` varchar(8) DEFAULT NULL,
  `statusSenha` tinyint(1) DEFAULT NULL,
  `updateAt` datetime DEFAULT NULL,
  `idGuiche` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tbguiche`
--
ALTER TABLE `tbguiche`
  ADD PRIMARY KEY (`idGuiche`),
  ADD KEY `idSala` (`idSala`);

--
-- Índices de tabela `tbsala`
--
ALTER TABLE `tbsala`
  ADD PRIMARY KEY (`idSala`);

--
-- Índices de tabela `tbsenha`
--
ALTER TABLE `tbsenha`
  ADD PRIMARY KEY (`idSenha`),
  ADD KEY `idGuiche` (`idGuiche`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbguiche`
--
ALTER TABLE `tbguiche`
  MODIFY `idGuiche` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `tbsala`
--
ALTER TABLE `tbsala`
  MODIFY `idSala` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `tbsenha`
--
ALTER TABLE `tbsenha`
  MODIFY `idSenha` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tbguiche`
--
ALTER TABLE `tbguiche`
  ADD CONSTRAINT `tbguiche_ibfk_1` FOREIGN KEY (`idSala`) REFERENCES `tbsala` (`idSala`);

--
-- Restrições para tabelas `tbsenha`
--
ALTER TABLE `tbsenha`
  ADD CONSTRAINT `tbsenha_ibfk_1` FOREIGN KEY (`idGuiche`) REFERENCES `tbguiche` (`idGuiche`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
