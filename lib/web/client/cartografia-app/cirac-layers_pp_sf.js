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
        "maxzoom": 11,
        "name": "cirac_vul_cp4_sf_pp",
        "description": "<div style=\"font-size: 110%; font-weight: bold;\">Índice de Vulnerabilidade de Precipitação e Susceptibilidade Física (moda)</div><br>",
        "legend": "<div class='my-legend'>\n<div class='legend-title'>Índice de Vulnerabilidade de Precipitação e Susceptibilidade Física (moda)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Baixo: 1 - 3\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderado: 4\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            Elevado: 5 - 6\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Muito elevado: 7 - 8\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Fonte: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
        "id": "cirac-vul-cp4-sf-pp",
        "template": "<nunjucks>\n\nvar context = {\n  \"value\": {{value}},\n  \"zipcode\": \"{{zipcode}}\"\n}\n\n<% if value >= 2 and value <= 3 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade de Precipitação e Susc. Física:</b> <$ value $> (baixo) <br>\n<# <b>Descrição:</b> Áreas improváveis de ter inundações (Exposição, Suscetibilidade Física), e onde as comunidades são menos suscetíveis (Suscetibilidade Social). #>\n \n<% elif value >= 4 and value <= 4 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade de Precipitação e Susc. Física:</b> <$ value $> (moderado) <br>\n<# <b>Descrição:</b> Áreas improváveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e onde as comunidades tendem a ser menos suscetíveis (Suscetibilidade Social). #>\n\n<% elif value >= 5 and value <= 6 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade de Precipitação e Susc. Física:</b> <$ value $> (elevado) <br>\n<# <b>Descrição:</b> Áreas suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física) e com comunidades suscetíveis (Suscetibilidade Social). #>\n\n<% elif value >= 7 and value <= 8 %>\n\n<b>Código postal:</b> <$ zipcode $> <br>\n<b>Índice de Vulnerabilidade de Precipitação e Susc. Física:</b> <$ value $> (muito elevado) <br>\n<# <b>Descrição:</b> Áreas muito suscetíveis de sofrer danos durante ocorrências de inundação (Exposição, Suscetibilidade Física), e com comunidades suscetíveis (Suscetibilidade Social). #>\n\n<% else %>\n\n<b>ERROR</b>: unknown value\n\n<% endif %>\n\n</nunjucks>",
        "tiles": [
            "/tiles/cirac-vul-cp4-sf-pp/{z}/{x}/{y}.png"
        ],
        "grids": [
            "/tiles/cirac-vul-cp4-sf-pp/{z}/{x}/{y}.grid.json"
        ],
        "isCirac": true
    }
];
