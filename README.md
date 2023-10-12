# Calculadora de serviços Wireless

Shannon - Capacidade Máxima de Canal:

Calcular a capacidade máxima de transmissão de dados em um canal de comunicação.
Capacidade Máxima de Canal (bps) = largura de banda (Hz) * log2(1 + Sinal-Ruído), onde Sinal-Ruído é a relação sinal-ruído em decibéis.
Nyquist - Taxa de Nyquist:

Determinar a taxa de amostragem mínima necessária para recuperar um sinal adequadamente.
Taxa de Nyquist (bps) = 2 * largura de banda do sinal (Hz) * Mdodulação multinível .
Conversão de mW para dBm:

Realizar a conversão de potência de miliwatts (mW) para decibéis-milliwatts (dBm).
Potência (dBm) = 10 * log10(Potência em mW).
Conversão de dBm para mW:

Efetuar a conversão de decibéis-milliwatts (dBm) para miliwatts (mW).
 Potência (mW) = 10 (Potência em dBm / 10).
EIRP (Effective Isotropic Radiated Power):

Calcular a potência efetiva irradiada isotropicamente por uma antena.
EIRP (dBm) = Potência de Transmissão (dBm) + Ganho da Antena (dBi) - Perdas no Cabo (dB).
FSLP (Free Space Loss Path):

Determinar a perda de potência em uma transmissão sem fio em um espaço livre de obstáculos.
FSLP (dB) = 32,4 + 20 * log10(d) + 20 * log10(f), onde d é a distância em Km, f é a frequência em MHz.
RSL (Received Signal Level):

Calcular o nível de sinal recebido em um enlace de comunicação sem fio.
RSL (dBm) = Potência de Transmissão (dBm) + Ganho da Antena TX (dBi) - Perdas no Cabo TX (dB) - Free Space Loss Path  + Ganho da Antena RX (dBi) - Perdas no Cabo RX (dB) .
Fresnel Zone:

Determinar o raio da zona de Fresnel, uma área crucial que deve ser mantida livre de obstruções para garantir uma comunicação confiável.
Raio da zona de Fresnel (m) = 550 * √(DAO * DBO / ( D * f )), onde DAO eDBO são as distâncias do transmissor e receptor até o obstáculo, f é a frequência em MHz e D é a distância entre o transmissor e o receptor.
