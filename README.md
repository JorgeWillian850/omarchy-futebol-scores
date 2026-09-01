# Omarchy Futebol Scores

Fork focado **apenas em futebol** do plugin [omarchy-scores](https://github.com/meirdick/omarchy-scores) por [meirdick](https://github.com/meirdick).

Placares ao vivo na barra do Omarchy, com dezenas de ligas e logos.

## Instalação

```bash
omarchy plugin remove meirdick.scores   # opcional, se já tiver o original
omarchy plugin add https://github.com/SEU_USUARIO/omarchy-futebol-scores.git
omarchy plugin enable jorge.futebol-scores
omarchy bar move jorge.futebol-scores --section left
omarchy restart shell
```

## Ligas incluídas

Premier League, LaLiga, Bundesliga, Serie A, Ligue 1, Brasileirão, MLS, Liga MX, Eredivisie, Champions League, Saudi Pro League, Süper Lig, e mais.

Pressione `L` no painel para ver a lista completa.

## Alertas

```bash
omarchy bar set jorge.futebol-scores notifyStart true --json
omarchy bar set jorge.futebol-scores notifyScore true --json
omarchy bar set jorge.futebol-scores notifyLeagues true --json
```

## Seguir ligas

```bash
omarchy-shell jorge.futebol-scores followLeague eng.1
omarchy-shell jorge.futebol-scores followLeague bra.1
omarchy-shell jorge.futebol-scores following
```

## Créditos

Baseado em [meirdick/omarchy-scores](https://github.com/meirdick/omarchy-scores) (MIT).
Dados via ESPN (sem API key).
