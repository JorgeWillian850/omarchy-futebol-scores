// Ligas de futebol suportadas (fork focado só em soccer).
var CATALOG = {
  "soccer":  { name: "All soccer",           group: "Soccer", espn: "soccer/all" },
  "mls":     { name: "MLS",                  group: "Soccer", espn: "soccer/usa.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/19.png" },
  "eng.1":   { name: "Premier League",       group: "Soccer", espn: "soccer/eng.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/23.png" },
  "esp.1":   { name: "LaLiga",               group: "Soccer", espn: "soccer/esp.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/15.png" },
  "ger.1":   { name: "Bundesliga",           group: "Soccer", espn: "soccer/ger.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/10.png" },
  "ita.1":   { name: "Serie A",              group: "Soccer", espn: "soccer/ita.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/12.png" },
  "fra.1":   { name: "Ligue 1",              group: "Soccer", espn: "soccer/fra.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/9.png" },
  "ucl":     { name: "Champions League",     group: "Soccer", espn: "soccer/uefa.champions" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2.png" },
  "uel":     { name: "Europa League",        group: "Soccer", espn: "soccer/uefa.europa" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2310.png" },
  "wc":      { name: "World Cup",            group: "Soccer", espn: "soccer/fifa.world" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/4.png" },
  "wwc":     { name: "Women's World Cup",    group: "Soccer", espn: "soccer/fifa.wwc" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/6.png" },
  "bra.1":   { name: "Brasileirão",          group: "Soccer", espn: "soccer/bra.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/85.png" },
  "ned.1":   { name: "Eredivisie",           group: "Soccer", espn: "soccer/ned.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/11.png" },
  "ned.2":   { name: "Eerste Divisie",       group: "Soccer", espn: "soccer/ned.2" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/105.png" },
  "mex.1":   { name: "Liga MX",              group: "Soccer", espn: "soccer/mex.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/22.png" },
  "ksa.1":   { name: "Saudi Pro League",     group: "Soccer", espn: "soccer/ksa.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2488.png" },
  "sco.1":   { name: "Scottish Premiership", group: "Soccer", espn: "soccer/sco.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/45.png" },
  "sui.1":   { name: "Swiss Super League",   group: "Soccer", espn: "soccer/sui.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/17.png" },
  "tur.1":   { name: "Süper Lig",            group: "Soccer", espn: "soccer/tur.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/18.png" },
  "bel.1":   { name: "Belgian Pro League",   group: "Soccer", espn: "soccer/bel.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/6.png" },
  "ger.2":   { name: "2. Bundesliga",        group: "Soccer", espn: "soccer/ger.2" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/97.png" },
  "esp.2":   { name: "LaLiga Hypermotion",   group: "Soccer", espn: "soccer/esp.2" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/107.png" },
  "swe.1":   { name: "Allsvenskan",          group: "Soccer", espn: "soccer/swe.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/16.png" },
  "nor.1":   { name: "Eliteserien",          group: "Soccer", espn: "soccer/nor.1" },
  "nor.2":   { name: "Norwegian 1st Division", group: "Soccer", espn: "soccer/nor.2" },
  "den.1":   { name: "Danish Superliga",     group: "Soccer", espn: "soccer/den.1" },
  "chi.1":   { name: "Chinese Super League", group: "Soccer", espn: "soccer/chi.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/86.png" },
  "per.1":   { name: "Liga 1",               group: "Soccer", espn: "soccer/per.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/1813.png" },
  "aut.1":   { name: "Austrian Bundesliga",  group: "Soccer", espn: "soccer/aut.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/5.png" },
  "arg.1":   { name: "Primera División",     group: "Soccer", espn: "soccer/arg.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png" },
  "cyp.1":   { name: "Cyprus League",        group: "Soccer", espn: "soccer/cyp.1" },
  "cze.1":   { name: "Czech First League",   group: "Soccer", espn: "soccer/cze.1" }
};

var BROWSE_ORDER = [
  "eng.1", "esp.1", "ger.1", "ger.2", "ita.1", "fra.1", "bra.1", "ned.1", "ned.2",
  "mex.1", "ksa.1", "sco.1", "sui.1", "tur.1", "bel.1", "mls", "ucl", "uel", "wc",
  "swe.1", "nor.1", "nor.2", "den.1", "chi.1", "per.1", "aut.1", "arg.1", "esp.2", "cyp.1", "cze.1"
];

function resolve(slug) {
  var id = String(slug || "").trim()
  if (id === "") return null
  if (CATALOG.hasOwnProperty(id)) {
    var known = CATALOG[id]
    return {
      id: id, name: known.name, group: known.group, espn: known.espn,
      statsapi: 0, nhlweb: false,
      individual: false, endurance: false,
      logo: known.logo || "", known: true
    }
  }
  var espn = id.indexOf("/") >= 0 ? id : (/^[a-z]{3}\.\d+$/.test(id) ? "soccer/" + id : "")
  if (espn === "") return null
  return {
    id: id, name: id, group: "Soccer", espn: espn,
    statsapi: 0, nhlweb: false, individual: false, endurance: false, logo: "", known: false
  }
}

function logoFor(slug) {
  var league = resolve(slug)
  return league ? league.logo : ""
}

function shortLabel(slug) {
  var name = displayName(slug)
  var words = String(name).split(/[\s.]+/).filter(function(w) { return w !== "" })
  if (words.length > 0 && /^[A-Z]{2,}$/.test(words[0])) return words[0].slice(0, 2)
  if (words.length >= 2) return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
  return String(name).slice(0, 2).toUpperCase()
}

function displayName(slug) {
  var league = resolve(slug)
  return league ? league.name : String(slug || "")
}

function group(slug) {
  var league = resolve(slug)
  return league ? league.group : "Soccer"
}

function isEndurance(slug) {
  return false
}

function isIndividual(slug) {
  return false
}

function providersFor(slug, overrides) {
  var league = resolve(slug)
  if (!league) return []
  return ["espn"]
}

function browseList() {
  var out = []
  for (var i = 0; i < BROWSE_ORDER.length; i++) {
    var league = resolve(BROWSE_ORDER[i])
    if (league) out.push(league)
  }
  return out
}

if (typeof module !== "undefined") {
  module.exports = {
    CATALOG: CATALOG,
    BROWSE_ORDER: BROWSE_ORDER,
    resolve: resolve,
    displayName: displayName,
    group: group,
    isIndividual: isIndividual,
    providersFor: providersFor, logoFor: logoFor, shortLabel: shortLabel,
    isEndurance: isEndurance,
    browseList: browseList
  }
}
