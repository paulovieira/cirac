Cirac.layers = [
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_fixed_assets_i_b",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Activos Fixos Industriais cave (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 40\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            40 – 80\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            80 – 120\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            120 – 160\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            160 – 200\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            200 – 240\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_fixed_assets_i_b",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_fixed_assets_i_b/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_fixed_assets_i_b/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_fixed_assets_i_g",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Activos Fixos Industriais R/C (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 25\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            25 – 50\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            50 – 75\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            75 – 100\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            100 – 125\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            125 – 150\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_fixed_assets_i_g",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_fixed_assets_i_g/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_fixed_assets_i_g/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_fixed_assets_ni_b",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Activos Fixos não Industriais cave (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 100\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            100 – 200\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            200 – 300\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            300 – 400\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            400 – 500\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            500 – 600\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_fixed_assets_ni_b",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_fixed_assets_ni_b/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_fixed_assets_ni_b/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_fixed_assets_ni_g",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Activos Fixos não Industriais R/C (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 100\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            100 – 200\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            200 – 300\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            300 – 400\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            400 – 500\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            500 – 600\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_fixed_assets_ni_g",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_fixed_assets_ni_g/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_fixed_assets_ni_g/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_res_inventory_b",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Conteúdo Residencial cave (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 100\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            100 – 200\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            200 – 300\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            300 – 400\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            400 – 500\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            500 – 600\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_res_inventory_b",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_res_inventory_b/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_res_inventory_b/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_res_inventory_g",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Conteúdo Residencial R/C (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 100\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            100 – 200\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            200 – 300\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            300 – 400\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            400 – 500\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            500 – 600\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_res_inventory_g",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_res_inventory_g/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_res_inventory_g/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_stocks_b",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Stocks cave (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 100\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            100 – 200\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            200 – 300\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            300 – 400\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            400 – 500\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            500 – 600\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_stocks_b",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_stocks_b/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_stocks_b/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_stocks_g",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Stocks R/C (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 100\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            100 – 200\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            200 – 300\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            300 – 400\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            400 – 500\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            500 – 600\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_stocks_g",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_stocks_g/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_stocks_g/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_structure",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Dano Médio Anual - Estrutura (permilagem)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#686868;'></span>\n            0\n    </li>\n    <li><span style='background:#6FC400;'></span>\n            0.0001 – 10\n    </li>\n    <li><span style='background:#B0E000;'></span>\n            10 – 20\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            20 – 30\n    </li>\n    <li><span style='background:#FFAA00;'></span>\n            30 – 40\n    </li>\n    <li><span style='background:#FF5500;'></span>\n            40 – 50\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            50 – 60\n    </li>\n\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_structure",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\nDano Médio Anual: <$ value $>‰\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_risk_lx_structure/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_structure/{z}/{x}/{y}.grid.json"
        ],
        "isRisk": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_t100",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Mapa de inundação para o período de retorno de 100 anos</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#0070FF;'></span>\n            Área inundada\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_t100",
        "template": "Área inundada (período de retorno de 100 anos)\n",
        "tiles": [
            "/tiles/cirac_risk_lx_t100/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_t100/{z}/{x}/{y}.grid.json"
        ],
        "isFlood": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_t50",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Mapa de inundação para o período de retorno de 50 anos</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#328cff;'></span>\n            Área inundada\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_t50",
        "template": "Área inundada (período de retorno de 50 anos)\n",
        "tiles": [
            "/tiles/cirac_risk_lx_t50/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_t50/{z}/{x}/{y}.grid.json"
        ],
        "isFlood": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_risk_lx_t500",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Mapa de inundação para o período de retorno de 500 anos</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#0059cc;'></span>\n            Área inundada\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_risk_lx_t500",
        "template": "Área inundada (período de retorno de 500 anos)\n",
        "tiles": [
            "/tiles/cirac_risk_lx_t500/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_risk_lx_t500/{z}/{x}/{y}.grid.json"
        ],
        "isFlood": true,
        "zIndex": 7
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_bfvi_75",
        "description": "O Risco é definido, de forma genérica, como a probabilidade de ocorrência de consequências ou perdas danosas como resultado da interação entre o meio natural, ou dos perigos induzido pelo homem, e as condições de susceptibilidade dos elementos. <br><br>O cálculo do risco consiste no produto da probabilidade de ocorrência de um fenómeno, com uma determinada magnitude, pelas consequências resultantes desse fenómeno: <b>risco = probabilidade &#10005; consequência</b>.<br><br>A probabilidade foi obtida através dos <b>períodos de retorno</b> (ver glossário) de precipitação ou de caudais para as diferentes áreas.<br><br>Através de modelação é possível obter-se a extensão da inundação e as características associada a diferentes períodos de retorno. Com esta informação e recorrendo-se a dados históricas dos danos causados nos elementos expostos associados a diferentes alturas de água, criam-se <b>curvas profundidade-dano</b>.<br><br>Com a aplicação destas curvas associa-se uma consequência aos elementos expostos nos diferentes períodos de retorno. Finalmente e através da multiplicação da probabilidade de uma inundação pela consequência que esta causa nos elementos, obtemos o risco para cada período de retorno analisado. A soma do risco associado aos períodos de retorno analisados corresponde ao que se designa por <b>Dano Médio Anual</b>. Este dano médio anual representa a fração do valor total do património exposto para uma determinada categoria de edifícios que é impactado em média anualmente.<br><br>Neste projecto o dano foi avaliado para quatro áreas de estudo, sendo avaliado tanto a estrutura dos edifícios como os seus conteúdos, subdivididos em inventário residencial, ativos fixos (industriais e não industriais), e stocks. Esta avaliação apenas contabiliza o dano médio anual dos edifícios efectivamente afectados por inundações e não a totalidade de edifícios presentes na bacia avaliada.<br><br>As quatro áreas avaliadas foram escolhidas pelo grande número de cheias e inundações registadas: <ul><li>Lisboa (Bacia da Baixa)</li> <li>Algés (Baixa de Algés)</li> <li>Coimbra (Baixa de Coimbra e parte sul da cidade)</li> <li>Douro (Porto e Gaia)</li></ul>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Básico de Vulnerabilidade a Inundação por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_bfvi_75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 4 and value <= 4 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_bfvi_75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_bfvi_75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_bfvi_n",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Básico de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias, devido à sua localização.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Público em geral; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Básico de Vulnerabilidade a Inundação por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_bfvi_n",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 4 and value <= 4 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_bfvi_n/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_bfvi_n/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_cfvi",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>\n\n<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Combinado de Vulnerabilidade a Inundação por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            1\n    </li>\n    <li><span style='background:#66BF00;'></span>\n            2\n    </li>\n    <li><span style='background:#9BD900;'></span>\n            3\n    </li>\n    <li><span style='background:#DEF200;'></span>\n            4\n    </li>\n    <li><span style='background:#FFDD00;'></span>\n            5\n    </li>\n    <li><span style='background:#FF9100;'></span>\n            6\n    </li>\n    <li><span style='background:#FF4800;'></span>\n            7\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_cfvi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física, Exposição e Precipitação.\n\n<% elif value == 2 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Precipitação. Elevada Exposição.\n\n<% elif value == 3 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Exposição. Elevada Precipitação.\n\n<% elif value == 4 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física. Elevada Exposição e Precipitação.\n\n<% elif value == 5 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física. Baixa Exposição e Precipitação.\n\n<% elif value == 6 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Exposição. Baixa Precipitação.\n\n<% elif value == 7 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Precipitação. Baixa Exposição.\n\n<% elif value == 8 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física, Exposição e Precipitação.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_cfvi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_cfvi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_cfvi75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>\n\n<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Combinado de Vulnerabilidade a Inundação por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            1\n    </li>\n    <li><span style='background:#66BF00;'></span>\n            2\n    </li>\n    <li><span style='background:#9BD900;'></span>\n            3\n    </li>\n    <li><span style='background:#DEF200;'></span>\n            4\n    </li>\n    <li><span style='background:#FFDD00;'></span>\n            5\n    </li>\n    <li><span style='background:#FF9100;'></span>\n            6\n    </li>\n    <li><span style='background:#FF4800;'></span>\n            7\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_cfvi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física, Exposição e Precipitação.\n\n<% elif value == 2 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Precipitação. Elevada Exposição.\n\n<% elif value == 3 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Exposição. Elevada Precipitação.\n\n<% elif value == 4 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física. Elevada Exposição e Precipitação.\n\n<% elif value == 5 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física. Baixa Exposição e Precipitação.\n\n<% elif value == 6 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Exposição. Baixa Precipitação.\n\n<% elif value == 7 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Precipitação. Baixa Exposição.\n\n<% elif value == 8 %>\n\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física, Exposição e Precipitação.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_cfvi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_cfvi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_e",
        "description": "Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de \"Base Geográfica de Referenciação de Informações\" (BGRI).<br><br>\n\nO componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Exposição por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_e",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice de Exposição:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com estruturas dispersas.\n\n<% elif value == 2 %>\n\n<b>Índice de Exposição:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas de baixa densidade de edificado característico de áreas rurais.\n\n<% elif value == 3 %>\n\n<b>Índice de Exposição:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com densidade média de edifícios, normalmente aldeias ou regiões próximas de áreas urbanas.\n\n<% elif value == 4 %>\n\n<b>Índice de Exposição:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com densidade elevada de edifícios, principalmente representando áreas urbanas.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_e/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_e/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_e75",
        "description": "Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de \"Base Geográfica de Referenciação de Informações\" (BGRI).<br><br>\n\nO componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Exposição por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_e75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice de Exposição:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com estruturas dispersas.\n\n<% elif value == 2 %>\n\n<b>Índice de Exposição:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas de baixa densidade de edificado característico de áreas rurais.\n\n<% elif value == 3 %>\n\n<b>Índice de Exposição:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com densidade média de edifícios, normalmente aldeias ou regiões próximas de áreas urbanas.\n\n<% elif value == 4 %>\n\n<b>Índice de Exposição:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com densidade elevada de edifícios, principalmente representando áreas urbanas.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_e75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_e75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_fvi_75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade a Inundação por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 3 - 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 6 - 7\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 8 - 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 11 - 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_fvi_75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value >= 3 and value <= 5 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 6 and value <= 7 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 8 and value <= 10 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 11 and value <= 12 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_fvi_75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_fvi_75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_fvi_n",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade a Inundação por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 3 - 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 6 - 7\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 8 - 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 11 - 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_fvi_n",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value >= 3 and value <= 5 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 6 and value <= 7 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 8 and value <= 10 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 11 and value <= 12 %>\n\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_fvi_n/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_fvi_n/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_sf",
        "description": "A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>\n\nAs variáveis e respetivos conjuntos de dados foram baseados em três critérios:\n<ol style=\"list-style-type: lower-alpha\">\n<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>\n<li>minimização do número de variáveis para contribuir para a transparência de índice</li>\n <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>\n </ol>\n\nTrês variáveis foram escolhidas:\n<ol style=\"list-style-type: lower-roman\">\n<li>a acumulação de fluxo</li>\n<li>uma matriz de custo de distâncias</li>\n<li>o número de fluxo</li>\n</ol>\n \nOs dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>\n\nCom base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>\n\nO mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>\n\nIsso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>\n\nA região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>\n\n<style type='text/css'>\n\nul.my-teaser  {\n  list-style: circle;\n  padding-left: 15px;\n  margin-bottom: 0px;\n}\n\n</style>",
        "id": "cirac_vul_bgri_sf",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (baixo) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas montanhosas ou sem cursos de água na sua vizinhança.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões sem potencial de acumulação de água.</li>\n  <li>Regiões com solo mais permeável.</li>\n  <li>Regiões com custos muito eleva­dos de transporte de água devido a distância às linhas de água.</li>\n</ul>\n\n<% elif value == 2 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (moderado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas com distância crescente de cursos de água e encostas mais íngremes.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões de acumulação média / baixa de água.</li>\n  <li>Regiões com custos significativos de transporte de água devido a distância às linhas de água.</li>\n  <li>Regiões de solo permeável.</li>\n</ul>\n\n<% elif value == 3 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação de planícies de inundação adjacentes nos principais rios.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões inundadas provocadas por grandes rios.</li>\n  <li>Regiões de solo permeável.</li>\n  <li>Regiões com elevado potencial de acumulação de água.</li>\n</ul>\n\n<% elif value == 4 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (muito elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação das principais linhas de água.</li>\n  <li>Algumas áreas urbanas principais.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Linhas de água e regiões contíguas.</li>\n  <li>Regiões de solo impermeável (e.g. cidades).</li>\n</ul>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_bgri_sf/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_sf/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_sf75",
        "description": "A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>\n\nAs variáveis e respetivos conjuntos de dados foram baseados em três critérios:\n<ol style=\"list-style-type: lower-alpha\">\n<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>\n<li>minimização do número de variáveis para contribuir para a transparência de índice</li>\n <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>\n </ol>\n\nTrês variáveis foram escolhidas:\n<ol style=\"list-style-type: lower-roman\">\n<li>a acumulação de fluxo</li>\n<li>uma matriz de custo de distâncias</li>\n<li>o número de fluxo</li>\n</ol>\n \nOs dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>\n\nCom base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>\n\nO mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>\n\nIsso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>\n\nA região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>\n\n<style type='text/css'>\n\nul.my-teaser  {\n  list-style: circle;\n  padding-left: 15px;\n  margin-bottom: 0px;\n}\n\n</style>",
        "id": "cirac_vul_bgri_sf75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (baixo) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas montanhosas ou sem cursos de água na sua vizinhança.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões sem potencial de acumulação de água.</li>\n  <li>Regiões com solo mais permeável.</li>\n  <li>Regiões com custos muito eleva­dos de transporte de água devido a distância às linhas de água.</li>\n</ul>\n\n<% elif value == 2 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (moderado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas com distância crescente de cursos de água e encostas mais íngremes.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões de acumulação média / baixa de água.</li>\n  <li>Regiões com custos significativos de transporte de água devido a distância às linhas de água.</li>\n  <li>Regiões de solo permeável.</li>\n</ul>\n\n<% elif value == 3 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação de planícies de inundação adjacentes nos principais rios.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões inundadas provocadas por grandes rios.</li>\n  <li>Regiões de solo permeável.</li>\n  <li>Regiões com elevado potencial de acumulação de água.</li>\n</ul>\n\n<% elif value == 4 %>\n\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (muito elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação das principais linhas de água.</li>\n  <li>Algumas áreas urbanas principais.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Linhas de água e regiões contíguas.</li>\n  <li>Regiões de solo impermeável (e.g. cidades).</li>\n</ul>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_bgri_sf75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_sf75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_ssi",
        "description": "A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>\n\nO Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>\n\nA partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: \n<ol style=\"list-style-type: lower-alpha\">\n<li>as condições regionais</li>\n<li>idade</li>\n<li>condições de exclusão social</li>\n</ol>\n\nO componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>\n\nValores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Social por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_ssi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (baixo) <br>\n<b>Descrição da classe:</b> Populações com um reduzido nível de susce­tibilidade, que estão mais do que preparadas para agir com as consequências das inunda­ções e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 2 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (moderado) <br>\n<b>Descrição da classe:</b> Populações moderadamente suscetíveis, que estão preparadas globalmente para agir com as consequências das inundações e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 3 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (elevado) <br>\n<b>Descrição da classe:</b> Populações suscetíveis, com capacidade reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% elif value == 4 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (muito elevado) <br>\n<b>Descrição da classe:</b> Populações altamente suscetíveis, com capacidade muito reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_ssi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_ssi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_ssi75",
        "description": "A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>\n\nO Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>\n\nA partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: \n<ol style=\"list-style-type: lower-alpha\">\n<li>as condições regionais</li>\n<li>idade</li>\n<li>condições de exclusão social</li>\n</ol>\n\nO componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>\n\nValores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Social por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_ssi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (baixo) <br>\n<b>Descrição da classe:</b> Populações com um reduzido nível de susce­tibilidade, que estão mais do que preparadas para agir com as consequências das inunda­ções e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 2 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (moderado) <br>\n<b>Descrição da classe:</b> Populações moderadamente suscetíveis, que estão preparadas globalmente para agir com as consequências das inundações e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 3 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (elevado) <br>\n<b>Descrição da classe:</b> Populações suscetíveis, com capacidade reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% elif value == 4 %>\n\n<b>Índice de susceptibilidade social:</b> <$ value $> (muito elevado) <br>\n<b>Descrição da classe:</b> Populações altamente suscetíveis, com capacidade muito reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% else %>\n\n<b>ERRO</b>: valor desconhecido: <$ value $>\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_ssi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_ssi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_tf",
        "description": "Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>\n\nNo litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> \n\nA ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>\n\nA precipitação como um componente do Índice de Vulnerabilidade de Inundação\nteve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver \"normais climatológicas\" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>\n\nEste índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Precipitação por BGRI (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_tf",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com baixa precipitação anual (380 - 730 mm/ano)\n\n<% elif value == 2 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas com precipitação anual moderada (730 - 930 mm/ano)\n\n<% elif value == 3 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual elevada (930 - 1270 mm/ano)\n\n<% elif value == 4 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual muito elevada (1270 - 3500 mm/ano)\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_bgri_tf/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_tf/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 6,
        "maxzoom": 19,
        "name": "cirac_vul_bgri_tf75",
        "description": "Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>\n\nNo litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> \n\nA ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>\n\nA precipitação como um componente do Índice de Vulnerabilidade de Inundação\nteve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver \"normais climatológicas\" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>\n\nEste índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Precipitação por BGRI (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_bgri_tf75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}}\n}\n\n<% if value == 1 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com baixa precipitação anual (380 - 730 mm/ano)\n\n<% elif value == 2 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas com precipitação anual moderada (730 - 930 mm/ano)\n\n<% elif value == 3 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual elevada (930 - 1270 mm/ano)\n\n<% elif value == 4 %>\n\n<b>Índice de Precipitação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual muito elevada (1270 - 3500 mm/ano)\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_bgri_tf75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_bgri_tf75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_bfvi",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Básico de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias, devido à sua localização.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Público em geral; Proteção civil",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Básico de Vulnerabilidade a Inundação por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_bfvi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 4 and value <= 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_bfvi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_bfvi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_bfvi75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Básico de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias, devido à sua localização.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Público em geral; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Básico de Vulnerabilidade a Inundação por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_bfvi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 4 and value <= 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_bfvi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_bfvi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_cfvi_75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>\n\n<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Combinado de Vulnerabilidade a Inundação por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            1\n    </li>\n    <li><span style='background:#66BF00;'></span>\n            2\n    </li>\n    <li><span style='background:#9BD900;'></span>\n            3\n    </li>\n    <li><span style='background:#DEF200;'></span>\n            4\n    </li>\n    <li><span style='background:#FFDD00;'></span>\n            5\n    </li>\n    <li><span style='background:#FF9100;'></span>\n            6\n    </li>\n    <li><span style='background:#FF4800;'></span>\n            7\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_cfvi_75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física, Exposição e Precipitação.\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Precipitação. Elevada Exposição.\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Exposição. Elevada Precipitação.\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física. Elevada Exposição e Precipitação.\n\n<% elif value == 5 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física. Baixa Exposição e Precipitação.\n\n<% elif value == 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Exposição. Baixa Precipitação.\n\n<% elif value == 7 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Precipitação. Baixa Exposição.\n\n<% elif value == 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física, Exposição e Precipitação.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_cfvi_75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_cfvi_75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_cfvi_mode",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>\n\n<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Combinado de Vulnerabilidade a Inundação por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            1\n    </li>\n    <li><span style='background:#66BF00;'></span>\n            2\n    </li>\n    <li><span style='background:#9BD900;'></span>\n            3\n    </li>\n    <li><span style='background:#DEF200;'></span>\n            4\n    </li>\n    <li><span style='background:#FFDD00;'></span>\n            5\n    </li>\n    <li><span style='background:#FF9100;'></span>\n            6\n    </li>\n    <li><span style='background:#FF4800;'></span>\n            7\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_cfvi_mode",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física, Exposição e Precipitação.\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Precipitação. Elevada Exposição.\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Exposição. Elevada Precipitação.\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física. Elevada Exposição e Precipitação.\n\n<% elif value == 5 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física. Baixa Exposição e Precipitação.\n\n<% elif value == 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Exposição. Baixa Precipitação.\n\n<% elif value == 7 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Precipitação. Baixa Exposição.\n\n<% elif value == 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física, Exposição e Precipitação.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_cfvi_mode/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_cfvi_mode/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_e",
        "description": "Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de \"Base Geográfica de Referenciação de Informações\" (BGRI).<br><br>\n\nO componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Exposição por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_e",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com estruturas dispersas.\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas de baixa densidade de edificado característico de áreas rurais.\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com densidade média de edifícios, normalmente aldeias ou regiões próximas de áreas urbanas.\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com densidade elevada de edifícios, principalmente representando áreas urbanas.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_e/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_e/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_e75",
        "description": "Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de \"Base Geográfica de Referenciação de Informações\" (BGRI).<br><br>\n\nO componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Exposição por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_e75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com estruturas dispersas.\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas de baixa densidade de edificado característico de áreas rurais.\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com densidade média de edifícios, normalmente aldeias ou regiões próximas de áreas urbanas.\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Exposição:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com densidade elevada de edifícios, principalmente representando áreas urbanas.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_e75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_e75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_fvi",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade a Inundação por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 3 - 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 6 - 7\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 8 - 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 11 - 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_fvi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 3 and value <= 5 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 6 and value <= 7 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 8 and value <= 10 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 11 and value <= 12 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_fvi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_fvi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_fvi75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade a Inundação por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 3 - 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 6 - 7\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 8 - 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 11 - 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_fvi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 3 and value <= 5 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 6 and value <= 7 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 8 and value <= 10 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 11 and value <= 12 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_fvi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_fvi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_sf",
        "description": "A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>\n\nAs variáveis e respetivos conjuntos de dados foram baseados em três critérios:\n<ol style=\"list-style-type: lower-alpha\">\n<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>\n<li>minimização do número de variáveis para contribuir para a transparência de índice</li>\n <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>\n </ol>\n\nTrês variáveis foram escolhidas:\n<ol style=\"list-style-type: lower-roman\">\n<li>a acumulação de fluxo</li>\n<li>uma matriz de custo de distâncias</li>\n<li>o número de fluxo</li>\n</ol>\n \nOs dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>\n\nCom base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>\n\nO mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>\n\nIsso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>\n\nA região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>\n\n<style type='text/css'>\n\nul.my-teaser  {\n  list-style: circle;\n  padding-left: 15px;\n  margin-bottom: 0px;\n}\n\n</style>\n",
        "id": "cirac_vul_cp4_sf",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (baixo) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas montanhosas ou sem cursos de água na sua vizinhança.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões sem potencial de acumulação de água.</li>\n  <li>Regiões com solo mais permeável.</li>\n  <li>Regiões com custos muito eleva­dos de transporte de água devido a distância às linhas de água.</li>\n</ul>\n\n<% elif value == 2 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (moderado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas com distância crescente de cursos de água e encostas mais íngremes.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões de acumulação média / baixa de água.</li>\n  <li>Regiões com custos significativos de transporte de água devido a distância às linhas de água.</li>\n  <li>Regiões de solo permeável.</li>\n</ul>\n\n<% elif value == 3 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação de planícies de inundação adjacentes nos principais rios.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões inundadas provocadas por grandes rios.</li>\n  <li>Regiões de solo permeável.</li>\n  <li>Regiões com elevado potencial de acumulação de água.</li>\n</ul>\n\n<% elif value == 4 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (muito elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação das principais linhas de água.</li>\n  <li>Algumas áreas urbanas principais.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Linhas de água e regiões contíguas.</li>\n  <li>Regiões de solo impermeável (e.g. cidades).</li>\n</ul>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_cp4_sf/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_sf/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_sf75",
        "description": "A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>\n\nAs variáveis e respetivos conjuntos de dados foram baseados em três critérios:\n<ol style=\"list-style-type: lower-alpha\">\n<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>\n<li>minimização do número de variáveis para contribuir para a transparência de índice</li>\n <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>\n </ol>\n\nTrês variáveis foram escolhidas:\n<ol style=\"list-style-type: lower-roman\">\n<li>a acumulação de fluxo</li>\n<li>uma matriz de custo de distâncias</li>\n<li>o número de fluxo</li>\n</ol>\n \nOs dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>\n\nCom base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>\n\nO mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>\n\nIsso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>\n\nA região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n\n  .my-teaser ul {\n    list-style: circle;\n    padding-left: 20px;\n  }\n</style>\n\n\n<style type='text/css'>\n\nul.my-teaser  {\n  list-style: circle;\n  padding-left: 15px;\n  margin-bottom: 0px;\n}\n\n</style>\n\n",
        "id": "cirac_vul_cp4_sf75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (baixo) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas montanhosas ou sem cursos de água na sua vizinhança.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões sem potencial de acumulação de água.</li>\n  <li>Regiões com solo mais permeável.</li>\n  <li>Regiões com custos muito eleva­dos de transporte de água devido a distância às linhas de água.</li>\n</ul>\n\n<% elif value == 2 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (moderado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas com distância crescente de cursos de água e encostas mais íngremes.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões de acumulação média / baixa de água.</li>\n  <li>Regiões com custos significativos de transporte de água devido a distância às linhas de água.</li>\n  <li>Regiões de solo permeável.</li>\n</ul>\n\n<% elif value == 3 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação de planícies de inundação adjacentes nos principais rios.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões inundadas provocadas por grandes rios.</li>\n  <li>Regiões de solo permeável.</li>\n  <li>Regiões com elevado potencial de acumulação de água.</li>\n</ul>\n\n<% elif value == 4 %>\n\n<div><b>Código postal:</b> <$ zipcode $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (muito elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação das principais linhas de água.</li>\n  <li>Algumas áreas urbanas principais.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Linhas de água e regiões contíguas.</li>\n  <li>Regiões de solo impermeável (e.g. cidades).</li>\n</ul>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_cp4_sf75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_sf75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_ssi",
        "description": "A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>\n\nO Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>\n\nA partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: \n<ol style=\"list-style-type: lower-alpha\">\n<li>as condições regionais</li>\n<li>idade</li>\n<li>condições de exclusão social</li>\n</ol>\n\n\nO componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>\n\nValores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Social por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_ssi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (baixo) <br>\n<b>Descrição da classe:</b> Populações com um reduzido nível de susce­tibilidade, que estão mais do que preparadas para agir com as consequências das inunda­ções e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (moderado) <br>\n<b>Descrição da classe:</b> Populações moderadamente suscetíveis, que estão preparadas globalmente para agir com as consequências das inundações e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (elevado) <br>\n<b>Descrição da classe:</b> Populações suscetíveis, com capacidade reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (muito elevado) <br>\n<b>Descrição da classe:</b> Populações altamente suscetíveis, com capacidade muito reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_ssi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_ssi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_ssi75",
        "description": "A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>\n\nO Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>\n\nA partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: \n<ol style=\"list-style-type: lower-alpha\">\n<li>as condições regionais</li>\n<li>idade</li>\n<li>condições de exclusão social</li>\n</ol>\n\nO componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>\n\nValores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Social por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_ssi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (baixo) <br>\n<b>Descrição da classe:</b> Populações com um reduzido nível de susce­tibilidade, que estão mais do que preparadas para agir com as consequências das inunda­ções e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (moderado) <br>\n<b>Descrição da classe:</b> Populações moderadamente suscetíveis, que estão preparadas globalmente para agir com as consequências das inundações e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (elevado) <br>\n<b>Descrição da classe:</b> Populações suscetíveis, com capacidade reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (muito elevado) <br>\n<b>Descrição da classe:</b> Populações altamente suscetíveis, com capacidade muito reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_ssi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_ssi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_tf",
        "description": "Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>\n\nNo litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> \n\nA ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>\n\nA precipitação como um componente do Índice de Vulnerabilidade de Inundação\nteve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver \"normais climatológicas\" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>\n\nEste índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Precipitação por código postal (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_tf",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com baixa precipitação anual (380 - 730 mm/ano)\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas com precipitação anual moderada (730 - 930 mm/ano)\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual elevada (930 - 1270 mm/ano)\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual muito elevada (1270 - 3500 mm/ano)\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_tf/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_tf/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_tf75",
        "description": "Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>\n\nNo litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> \n\nA ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>\n\nA precipitação como um componente do Índice de Vulnerabilidade de Inundação\nteve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver \"normais climatológicas\" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>\n\nEste índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Precipitação por código postal (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_cp4_tf75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value == 1 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com baixa precipitação anual (380 - 730 mm/ano)\n\n<% elif value == 2 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas com precipitação anual moderada (730 - 930 mm/ano)\n\n<% elif value == 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual elevada (930 - 1270 mm/ano)\n\n<% elif value == 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual muito elevada (1270 - 3500 mm/ano)\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_cp4_tf75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_cp4_tf75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_bfvi",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Básico de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias, devido à sua localização.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Público em geral; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Básico de Vulnerabilidade a Inundação por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_bfvi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 4 and value <= 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_bfvi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_bfvi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_bfvi75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Básico de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias, devido à sua localização.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Público em geral; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Básico de Vulnerabilidade a Inundação por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_bfvi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 4 and value <= 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Básico de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_bfvi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_bfvi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_cfvi_75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>\n\n<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Combinado de Vulnerabilidade a Inundação por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            1\n    </li>\n    <li><span style='background:#66BF00;'></span>\n            2\n    </li>\n    <li><span style='background:#9BD900;'></span>\n            3\n    </li>\n    <li><span style='background:#DEF200;'></span>\n            4\n    </li>\n    <li><span style='background:#FFDD00;'></span>\n            5\n    </li>\n    <li><span style='background:#FF9100;'></span>\n            6\n    </li>\n    <li><span style='background:#FF4800;'></span>\n            7\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_cfvi_75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física, Exposição e Precipitação.\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Precipitação. Elevada Exposição.\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Exposição. Elevada Precipitação.\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física. Elevada Exposição e Precipitação.\n\n<% elif value == 5 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física. Baixa Exposição e Precipitação.\n\n<% elif value == 6 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Exposição. Baixa Precipitação.\n\n<% elif value == 7 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Precipitação. Baixa Exposição.\n\n<% elif value == 8 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física, Exposição e Precipitação.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_cfvi_75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_cfvi_75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_cfvi_mode",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Combinado de Vulnerabilidade a Inundação = Suscetibilidade Física &cap; Exposição &cap; Precipitação</div><br>\n\n<b>Características do índice:</b> Intersecção das características de suscetibilidade física, exposição e precipitação num índice combinado. Com esta abordagem combinada é possível ponderar a contribuição de cada componente de vulnerabilidade.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administrações locais públicas; Planeamento territorial; Companhias de seguros;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Combinado de Vulnerabilidade a Inundação por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            1\n    </li>\n    <li><span style='background:#66BF00;'></span>\n            2\n    </li>\n    <li><span style='background:#9BD900;'></span>\n            3\n    </li>\n    <li><span style='background:#DEF200;'></span>\n            4\n    </li>\n    <li><span style='background:#FFDD00;'></span>\n            5\n    </li>\n    <li><span style='background:#FF9100;'></span>\n            6\n    </li>\n    <li><span style='background:#FF4800;'></span>\n            7\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_cfvi_mode",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física, Exposição e Precipitação.\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Precipitação. Elevada Exposição.\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física e Exposição. Elevada Precipitação.\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Baixa Suscetibilidade Física. Elevada Exposição e Precipitação.\n\n<% elif value == 5 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física. Baixa Exposição e Precipitação.\n\n<% elif value == 6 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Exposição. Baixa Precipitação.\n\n<% elif value == 7 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física e Precipitação. Baixa Exposição.\n\n<% elif value == 8 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice Combinado de Vulnerabilidade a Inundação:</b> <$ value $>  <br>\n<b>Descrição:</b> Elevada Suscetibilidade Física, Exposição e Precipitação.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_cfvi_mode/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_cfvi_mode/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_e",
        "description": "Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de \"Base Geográfica de Referenciação de Informações\" (BGRI).<br><br>\n\nO componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Exposição por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_e",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com estruturas dispersas.\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas de baixa densidade de edificado característico de áreas rurais.\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com densidade média de edifícios, normalmente aldeias ou regiões próximas de áreas urbanas.\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com densidade elevada de edifícios, principalmente representando áreas urbanas.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_e/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_e/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_e75",
        "description": "Exposição (E) é representada pela densidade de edifícios no território Português derivada dos dados recolhidos no censo nacional, em 2001, pelo Instituto Nacional de Estatística (INE). Cada unidade estatística espacial, que se assemelha a um quarteirão em áreas urbanas, tem o nome de \"Base Geográfica de Referenciação de Informações\" (BGRI).<br><br>\n\nO componente de Exposição destaca as regiões urbanas e peri-urbanas entre Viana do Castelo e Setúbal, com maior incidência nas áreas metropolitanas de Lisboa e Porto. Reflete duas realidades diferentes de morfologia urbana, com valores de exposição superiores na região do litoral norte, que estão relacionadas com a expansão urbana nos arredores de grandes cidades como Porto, Aveiro, Braga e Viana do Castelo, enquanto que na área metropolitana de Lisboa estão associados a uma ocupação mais compacta e densa.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Exposição por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_e75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com estruturas dispersas.\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas de baixa densidade de edificado característico de áreas rurais.\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com densidade média de edifícios, normalmente aldeias ou regiões próximas de áreas urbanas.\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Exposição:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com densidade elevada de edifícios, principalmente representando áreas urbanas.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_e75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_e75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_fvi",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade a Inundação por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 3 - 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 6 - 7\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 8 - 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 11 - 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_fvi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value >= 3 and value <= 5 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 6 and value <= 7 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 8 and value <= 10 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 11 and value <= 12 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_fvi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_fvi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_fvi75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade a Inundação = Suscetibilidade Física + Exposição + Suscetibilidade Social</div><br>\n\n<b>Características do índice:</b> Caracterização dos elementos expostos em termos de propensão a ser afectados pelas cheias e à capacidade da população de lidar com isso.<br><br>\n\n<b>Aplicação alvo / interessados:</b> Administração local e nacional pública; Proteção civil;",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade a Inundação por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 3 - 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 6 - 7\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 8 - 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 11 - 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_fvi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value >= 3 and value <= 5 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 6 and value <= 7 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 8 and value <= 10 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% elif value >= 11 and value <= 12 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social).\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_fvi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_fvi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 19,
        "name": "cirac_vul_freg_sf",
        "description": "A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>\n\nAs variáveis e respetivos conjuntos de dados foram baseados em três critérios:\n<ol style=\"list-style-type: lower-alpha\">\n<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>\n<li>minimização do número de variáveis para contribuir para a transparência de índice</li>\n <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>\n </ol>\n\nTrês variáveis foram escolhidas:\n<ol style=\"list-style-type: lower-roman\">\n<li>a acumulação de fluxo</li>\n<li>uma matriz de custo de distâncias</li>\n<li>o número de fluxo</li>\n</ol>\n \nOs dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>\n\nCom base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>\n\nO mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>\n\nIsso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>\n\nA região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>\n\n<style type='text/css'>\n\nul.my-teaser  {\n  list-style: circle;\n  padding-left: 15px;\n  margin-bottom: 0px;\n}\n\n</style>",
        "id": "cirac_vul_freg_sf",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (baixo) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas montanhosas ou sem cursos de água na sua vizinhança.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões sem potencial de acumulação de água.</li>\n  <li>Regiões com solo mais permeável.</li>\n  <li>Regiões com custos muito eleva­dos de transporte de água devido a distância às linhas de água.</li>\n</ul>\n\n<% elif value == 2 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (moderado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas com distância crescente de cursos de água e encostas mais íngremes.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões de acumulação média / baixa de água.</li>\n  <li>Regiões com custos significativos de transporte de água devido a distância às linhas de água.</li>\n  <li>Regiões de solo permeável.</li>\n</ul>\n\n<% elif value == 3 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação de planícies de inundação adjacentes nos principais rios.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões inundadas provocadas por grandes rios.</li>\n  <li>Regiões de solo permeável.</li>\n  <li>Regiões com elevado potencial de acumulação de água.</li>\n</ul>\n\n<% elif value == 4 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (muito elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação das principais linhas de água.</li>\n  <li>Algumas áreas urbanas principais.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Linhas de água e regiões contíguas.</li>\n  <li>Regiões de solo impermeável (e.g. cidades).</li>\n</ul>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_freg_sf/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_sf/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_sf75",
        "description": "A suscetibilidade a inundações deve ser visto como a propensão de uma área a ser afectada pelas cheias e é atribuída pelas características intrínsecas do território tais como declives, geologia, rede fluvial e uso do solo. A Suscetibilidade Física a inundações deriva principalmente de características inerentes a uma bacia específica.<br><br>\n\nAs variáveis e respetivos conjuntos de dados foram baseados em três critérios:\n<ol style=\"list-style-type: lower-alpha\">\n<li>capacidade de incorporar a influência de parâmetros em ambas as inundações progressivas e rápidas;</li>\n<li>minimização do número de variáveis para contribuir para a transparência de índice</li>\n <li>homogeneidade dos dados (por exemplo, origem, resolução espacial) em todo o território Português.</li>\n </ol>\n\nTrês variáveis foram escolhidas:\n<ol style=\"list-style-type: lower-roman\">\n<li>a acumulação de fluxo</li>\n<li>uma matriz de custo de distâncias</li>\n<li>o número de fluxo</li>\n</ol>\n \nOs dois primeiros descrevem o potencial de acumulação de água no leito do rio e áreas adjacentes, enquanto o último avalia a permeabilidade do solo com base no uso do solo e da geologia.<br><br>\n\nCom base nos dados históricos espaciais de inundação o Índice de Suscetibilidade Física (PSI) foi reclassificado em quatro classes distintas para distinguir entre áreas potenciais para acumulação de água mais elevada, como margens de rios e áreas adjacentes, e áreas menos suscetíveis a inundações, como topos das montanhas.<br><br>\n\nO mapa final de suscetibilidade física identifica como altamente suscetíveis as bacias dos principais rios portugueses (Tejo, Douro, Vouga, Mondego e Sado), em especial as áreas mais próximas à foz do rio. Algumas grandes cidades como Lisboa, Coimbra, Aveiro, Setúbal, Faro e Porto e algumas pequenas bacias na parte sul de Portugal (Algarve) também estão identificados como altamente suscetíveis a inundações (classes 3 e 4). <br><br>\n\nIsso mostra a sensibilidade do índice para identificar também áreas propensas a enchentes, caracterizadas por superfícies artificiais altamente impermeabilizadas situadas em regiões planas nas proximidades de cursos de água relevantes. <br><br>\n\nA região do Alentejo é também classificada como altamente suscetível (classe 3), devido às suas características topográficas e geológicas, uma vez que a maior parte do território é plano, com uma densidade de rede hidrográfica alta e solos rochosos impermeáveis (xisto e mármore) ou argilosos. Neste último caso, estes valores de elevada suscetibilidade física podem não ser totalmente traduzidos para uma frequência elevada de inundações, visto que esta região é caracterizada por regimes baixos de precipitação na maior parte do ano.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>\n\n<style type='text/css'>\n\nul.my-teaser  {\n  list-style: circle;\n  padding-left: 15px;\n  margin-bottom: 0px;\n}\n\n</style>",
        "id": "cirac_vul_freg_sf75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (baixo) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas montanhosas ou sem cursos de água na sua vizinhança.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões sem potencial de acumulação de água.</li>\n  <li>Regiões com solo mais permeável.</li>\n  <li>Regiões com custos muito eleva­dos de transporte de água devido a distância às linhas de água.</li>\n</ul>\n\n<% elif value == 2 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (moderado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Áreas com distância crescente de cursos de água e encostas mais íngremes.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões de acumulação média / baixa de água.</li>\n  <li>Regiões com custos significativos de transporte de água devido a distância às linhas de água.</li>\n  <li>Regiões de solo permeável.</li>\n</ul>\n\n<% elif value == 3 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação de planícies de inundação adjacentes nos principais rios.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Regiões inundadas provocadas por grandes rios.</li>\n  <li>Regiões de solo permeável.</li>\n  <li>Regiões com elevado potencial de acumulação de água.</li>\n</ul>\n\n<% elif value == 4 %>\n\n<div><b>Freguesia:</b> <$ parish $> </div>\n<div><b>Índice de susceptibilidade física:</b> <$ value $> (muito elevado) </div>\n<div><b>Caracterização da área:</b></div>\n<ul class='my-teaser'>\n  <li>Diferenciação das principais linhas de água.</li>\n  <li>Algumas áreas urbanas principais.</li>\n</ul>\n<div><b>Características físicas e resiliência:</b></div>\n<ul class='my-teaser'>\n  <li>Linhas de água e regiões contíguas.</li>\n  <li>Regiões de solo impermeável (e.g. cidades).</li>\n</ul>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>\n",
        "tiles": [
            "/tiles/cirac_vul_freg_sf75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_sf75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_ssi",
        "description": "A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>\n\nO Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>\n\nA partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: \n<ol style=\"list-style-type: lower-alpha\">\n<li>as condições regionais</li>\n<li>idade</li>\n<li>condições de exclusão social</li>\n</ol>\n\nO componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>\n\nValores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Social por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_ssi",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (baixo) <br>\n<b>Descrição da classe:</b> Populações com um reduzido nível de susce­tibilidade, que estão mais do que preparadas para agir com as consequências das inunda­ções e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (moderado) <br>\n<b>Descrição da classe:</b> Populações moderadamente suscetíveis, que estão preparadas globalmente para agir com as consequências das inundações e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (elevado) <br>\n<b>Descrição da classe:</b> Populações suscetíveis, com capacidade reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (muito elevado) <br>\n<b>Descrição da classe:</b> Populações altamente suscetíveis, com capacidade muito reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_ssi/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_ssi/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_ssi75",
        "description": "A suscetibilidade social a inundações é definida como a predisposição da sociedade para ser afetada, resistir, adaptar-se ou recuperar quando expostos a uma inundação. <br><br>\n\nO Índice de Suscetibilidade Social (SSI) foi desenvolvido com base num conjunto de cerca de 50 variáveis retiradas do censo Português para descrever as características funcionais e sócio-económicas atuais que determinam a capacidade de uma população para lidar com inundações, tais como, idade, escolaridade, rendimento, função do prédio e tipologia e meio urbano / rural. <br><br>\n\nA partir desse conjunto de dados original, um subconjunto menor de 14 indicadores foi selecionado e agregado de acordo com a sua relevância para caracterizar os três componentes principais de vulnerabilidade social a inundações: \n<ol style=\"list-style-type: lower-alpha\">\n<li>as condições regionais</li>\n<li>idade</li>\n<li>condições de exclusão social</li>\n</ol>\n\nO componente de suscetibilidade social do FVI demonstra uma capacidade maior de lidar com as inundações em áreas costeiras, principalmente associados às áreas mais urbanizadas com educação e rendimentos mais elevados. <br><br>\n\nValores de suscetibilidade sociais mais elevados estão localizados em regiões mais do interior, com foco nas regiões Norte e Centro e parte do Norte e Sul do Alentejo. Como esperado, as áreas metropolitanas de Lisboa e Porto têm os valores mais baixos de SSI, principalmente devido ao seu mais elevado rendimento per capita, educação e menor desemprego.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Suscetibilidade Física por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_ssi75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (baixo) <br>\n<b>Descrição da classe:</b> Populações com um reduzido nível de susce­tibilidade, que estão mais do que preparadas para agir com as consequências das inunda­ções e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (moderado) <br>\n<b>Descrição da classe:</b> Populações moderadamente suscetíveis, que estão preparadas globalmente para agir com as consequências das inundações e recuperar o seu ambiente com as mesmas condições anteriores a sofrer danos.\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (elevado) <br>\n<b>Descrição da classe:</b> Populações suscetíveis, com capacidade reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de susceptibilidade social:</b> <$ value $> (muito elevado) <br>\n<b>Descrição da classe:</b> Populações altamente suscetíveis, com capacidade muito reduzida de agir ou evitar consequências de danos causados pelas inundações e recuperar o seu ambiente com as mesmas condições anteriores aos danos.\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_ssi75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_ssi75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_tf",
        "description": "Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>\n\nNo litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> \n\nA ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>\n\nA precipitação como um componente do Índice de Vulnerabilidade de Inundação\nteve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver \"normais climatológicas\" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>\n\nEste índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Precipitação por freguesia (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_tf",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com baixa precipitação anual (380 - 730 mm/ano)\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas com precipitação anual moderada (730 - 930 mm/ano)\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual elevada (930 - 1270 mm/ano)\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual muito elevada (1270 - 3500 mm/ano)\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_tf/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_tf/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_freg_tf75",
        "description": "Portugal é geralmente caracterizado pelo clima mediterrâneo, mas com a influência Atlântica devido à sua posição geográfica.<br><br>\n\nNo litoral norte predomina o clima temperado mediterrânico com influência atlântica e maiores volumes de precipitação, enquanto que a região Nordeste é dominada pelo clima mediterrânico com influência continental e, consequentemente, com menos precipitação anual. No Sul de Portugal as características do clima mediterrânico temperado são mais pronunciados atingindo até três vezes menos precipitação anual do que no litoral norte.<br><br> \n\nA ligação entre as inundações e a precipitação depende do tipo de inundação (rápida ou inundação progressiva), as características da bacia, a saturação do solo e nas zonas costeiras da altura da maré. A combinação destas características determina que, para a mesma quantidade de chuva é possível ter uma inundação ou não. As principais dificuldades neste trabalho para estabelecer a ligação entre precipitação e inundações foi que, numa abordagem geral e qualitativa, é muito difícil colocar todas essas dependências num índice, uma vez que não são estáticas no tempo.<br><br>\n\nA precipitação como um componente do Índice de Vulnerabilidade de Inundação\nteve como objetivo fornecer informações adicionais sobre a distribuição geográfica da normal de precipitação (ver \"normais climatológicas\" no glossário), sendo que as regiões com maior pluviosidade anual têm mais probabilidade de reunir todos os elementos necessários para ter inundações. <br><br>\n\nEste índice representa a média da precipitação total anual entre 1961 e 1990 dividido em quatro classes que refletem as influências atlânticas e continentais do clima mediterrânico temperado e os efeitos da topografia na precipitação.",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Precipitação por freguesia (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo \n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac_vul_freg_tf75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"parish\": \"{{parish}}\"\n}\n\n<% if value == 1 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (baixo) <br>\n<b>Descrição:</b> Áreas com baixa precipitação anual (380 - 730 mm/ano)\n\n<% elif value == 2 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (moderado) <br>\n<b>Descrição:</b> Áreas com precipitação anual moderada (730 - 930 mm/ano)\n\n<% elif value == 3 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual elevada (930 - 1270 mm/ano)\n\n<% elif value == 4 %>\n\n<b>Freguesia:</b> <$ parish $> <br>\n<b>Índice de Precipitação:</b> <$ value $> (muito elevado) <br>\n<b>Descrição:</b> Áreas com precipitação anual muito elevada (1270 - 3500 mm/ano)\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac_vul_freg_tf75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac_vul_freg_tf75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_SF_PP_75",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Simplificado de Vulnerabilidade a Inundação = Suscetibilidade Física + Precipitação</div>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Simplificado de Vulnerabilidade a Inundação (percentil 75)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac-vul-cp4-sf-pp-75",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 1 and value <= 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<# <b>Descrição:</b> ... #>\n \n<% elif value >= 4 and value <= 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<# <b>Descrição:</b> ... #>\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<# <b>Descrição:</b> ... #>\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<# <b>Descrição:</b> ... #>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac-vul-cp4-sf-pp-75/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac-vul-cp4-sf-pp-75/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    },
    {
        "bounds": [
            -9.5691,
            36.8928,
            -6.1194,
            42.2244
        ],
        "center": [
            -9.1338,
            38.7546,
            6
        ],
        "minzoom": 5,
        "maxzoom": 15,
        "name": "cirac_vul_cp4_sf_pp",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice Simplificado de Vulnerabilidade a Inundação = Suscetibilidade Física + Precipitação</div>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice Simplificado de Vulnerabilidade a Inundação (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac-vul-cp4-sf-pp",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 1 and value <= 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (baixo) <br>\n<# <b>Descrição:</b> ... #>\n \n<% elif value >= 4 and value <= 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (moderado) <br>\n<# <b>Descrição:</b> ... #>\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (elevado) <br>\n<# <b>Descrição:</b> ... #>\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice Simplificado de Vulnerabilidade a Inundação:</b> <$ value $> (muito elevado) <br>\n<# <b>Descrição:</b> ... #>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac-vul-cp4-sf-pp/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac-vul-cp4-sf-pp/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    }

];
