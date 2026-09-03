// Canonical league slugs and their per-provider addresses.
//
// The rest of the plugin only ever says "eng.1" or "bra.1". Which path that
// turns into on some vendor's host is this file's problem and nobody else's;
// a provider slug that escapes this module is a bug.

// group is the heading the league sorts under in the panel's league list.
var CATALOG = {
  "mls":     { name: "MLS",              group: "Futebol", espn: "soccer/usa.1" , fotmob: { id: 130 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/19.png" },
  "eng.1":   { name: "Premier League",   group: "Futebol", espn: "soccer/eng.1" , fotmob: { id: 47 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/23.png" },
  "esp.1":   { name: "LaLiga",           group: "Futebol", espn: "soccer/esp.1" , fotmob: { id: 87 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/15.png" },
  "ger.1":   { name: "Bundesliga",       group: "Futebol", espn: "soccer/ger.1" , fotmob: { id: 54 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/10.png" },
  "ita.1":   { name: "Serie A",          group: "Futebol", espn: "soccer/ita.1" , fotmob: { id: 55 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/12.png" },
  "fra.1":   { name: "Ligue 1",          group: "Futebol", espn: "soccer/fra.1" , fotmob: { id: 53 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/9.png" },
  "ucl":     { name: "Champions League", group: "Futebol", espn: "soccer/uefa.champions" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2.png" },
  "uel":     { name: "Europa League",    group: "Futebol", espn: "soccer/uefa.europa" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2310.png" },
  "wc":      { name: "World Cup",        group: "Futebol", espn: "soccer/fifa.world" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/4.png" },
  "wwc":     { name: "Women's World Cup", group: "Futebol", espn: "soccer/fifa.wwc" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/6.png" },
  "bra.1":   { name: "Brasileirão",          group: "Futebol", espn: "soccer/bra.1" , fotmob: { id: 268 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/85.png" },
  "ned.1":   { name: "Eredivisie",           group: "Futebol", espn: "soccer/ned.1" , fotmob: { id: 57 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/11.png" },
  "ned.2":   { name: "Eerste Divisie",       group: "Futebol", espn: "soccer/ned.2" , fotmob: { id: 111 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/105.png" },
  "mex.1":   { name: "Liga MX",              group: "Futebol", espn: "soccer/mex.1" , fotmob: { id: 230 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/22.png" },
  "ksa.1":   { name: "Saudi Pro League",     group: "Futebol", espn: "soccer/ksa.1" , fotmob: { id: 536 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2488.png" },
  "sco.1":   { name: "Scottish Premiership", group: "Futebol", espn: "soccer/sco.1" , fotmob: { id: 64 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/45.png" },
  "sui.1":   { name: "Swiss Super League",   group: "Futebol", espn: "soccer/sui.1" , fotmob: { id: 69 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/17.png" },
  "tur.1":   { name: "Süper Lig",            group: "Futebol", espn: "soccer/tur.1" , fotmob: { id: 71 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/18.png" },
  "bel.1":   { name: "Belgian Pro League",   group: "Futebol", espn: "soccer/bel.1" , fotmob: { id: 40 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/6.png" },
  "ger.2":   { name: "2. Bundesliga",        group: "Futebol", espn: "soccer/ger.2" , fotmob: { id: 146 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/97.png" },
  "esp.2":   { name: "LaLiga Hypermotion",   group: "Futebol", espn: "soccer/esp.2" , fotmob: { id: 140 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/107.png" },
  "swe.1":   { name: "Allsvenskan",          group: "Futebol", espn: "soccer/swe.1" , fotmob: { id: 67 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/16.png" },
  "nor.1":   { name: "Eliteserien",          group: "Futebol", espn: "soccer/nor.1" , fotmob: { id: 59 } },
  "nor.2":   { name: "Norwegian 1st Division", group: "Futebol", espn: "soccer/nor.2" , fotmob: { id: 203 } },
  "den.1":   { name: "Danish Superliga",     group: "Futebol", espn: "soccer/den.1" , fotmob: { id: 46 } },
  "chi.1":   { name: "Chinese Super League", group: "Futebol", espn: "soccer/chi.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/86.png" },
  "per.1":   { name: "Liga 1",               group: "Futebol", espn: "soccer/per.1" , fotmob: { id: 131 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/1813.png" },
  "aut.1":   { name: "Austrian Bundesliga",  group: "Futebol", espn: "soccer/aut.1" , fotmob: { id: 38 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/5.png" },
  "arg.1":   { name: "Primera División",     group: "Futebol", espn: "soccer/arg.1" , fotmob: { id: 112 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png" },
  "cyp.1":   { name: "Cyprus League",        group: "Futebol", espn: "soccer/cyp.1" , fotmob: { id: 136 } },
  "cze.1":   { name: "Czech First League",   group: "Futebol", espn: "soccer/cze.1" , fotmob: { id: 122 } }
};

// Leagues offered in the panel's league list, in display order. A user can
// still name any other slug in `leagues` — see resolve() — this is only what
// gets browsed without typing.
var BROWSE_ORDER = [
  "eng.1", "esp.1", "ger.1", "ita.1", "fra.1", "bra.1", "ucl", "uel", "wc", "wwc",
  "mls", "mex.1", "arg.1", "ned.1", "ned.2", "sco.1", "ger.2", "esp.2", "tur.1", "bel.1",
  "sui.1", "swe.1", "nor.1", "nor.2", "den.1", "aut.1", "cze.1", "cyp.1", "per.1", "chi.1", "ksa.1"
];

var DEFAULT_FOLLOWED_LEAGUES = BROWSE_ORDER.join(",")

// ESPN publishes ~216 soccer competitions. Rather than enumerate them, any
// slug this file does not know is passed through: "sport/league" verbatim,
// and a bare "ned.1"-shaped slug is assumed to be soccer, which is the only
// family that uses that form.
function resolve(slug) {
  var id = String(slug || "").trim()
  if (id === "") return null
  if (CATALOG.hasOwnProperty(id)) {
    var known = CATALOG[id]
    return {
      id: id, name: known.name, group: known.group, espn: known.espn,
      fotmob: known.fotmob || null,
      individual: known.individual === true,
      logo: known.logo || "", known: true
    }
  }
  var espn = id.indexOf("/") >= 0 ? id : (/^[a-z]{3}\.\d+$/.test(id) ? "soccer/" + id : "")
  if (espn === "") return null
  return {
    id: id, name: id, group: "Other", espn: espn,
    fotmob: null, individual: false, logo: "", known: false
  }
}

// League mark, or "" when ESPN publishes none — college and the long tail of
// soccer competitions have no logo, and the caller draws a monogram instead.
function logoFor(slug) {
  var league = resolve(slug)
  if (!league) return ""
  if (league.logo) return league.logo
  if (league.fotmob && league.fotmob.id)
    return "https://images.fotmob.com/image_resources/logo/leaguelogo/" + league.fotmob.id + ".png"
  return ""
}

// Short label for a monogram when there is no mark.
function shortLabel(slug) {
  var name = displayName(slug)
  var words = String(name).split(/[\s.]+/).filter(function(w) { return w !== "" })
  // An acronym carries the identity on its own: "NCAA Football" as "NF" reads
  // as NFL, which is a different league sitting two rows above it.
  if (words.length > 0 && /^[A-Z]{2,}$/.test(words[0])) return words[0].slice(0, 2)
  if (words.length >= 2) return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase()
  return String(name).slice(0, 2).toUpperCase()
}

function displayName(slug) {
  var league = resolve(slug)
  if (league) return league.name
  var id = String(slug || "")
  // Unknown 2–5 letter acronyms (mlb, nhl) still render as themselves in
  // uppercase so fixture-driven rows keep a readable heading.
  if (/^[a-z]{2,5}$/.test(id)) return id.toUpperCase()
  return id
}

function group(slug) {
  var league = resolve(slug)
  return league ? league.group : "Other"
}

function isEndurance(slug) {
  return false
}

function isIndividual(slug) {
  var league = resolve(slug)
  return league ? league.individual : false
}

// Which providers can serve this league, best first. The user's providerChain
// setting overrides per league; anything it names that cannot serve the league
// is dropped rather than tried and failed.
function providersFor(slug, overrides) {
  var league = resolve(slug)
  if (!league) return []
  var capable = ["espn"]
  if (league.fotmob && league.fotmob.id) capable.push("fotmob")

  var requested = overrides && overrides[slug]
  if (!Array.isArray(requested) || requested.length === 0) return capable

  var chain = []
  for (var i = 0; i < requested.length; i++) {
    var name = String(requested[i])
    if (capable.indexOf(name) >= 0 && chain.indexOf(name) < 0) chain.push(name)
  }
  return chain.length > 0 ? chain : capable
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
    DEFAULT_FOLLOWED_LEAGUES: DEFAULT_FOLLOWED_LEAGUES,
    resolve: resolve,
    displayName: displayName,
    group: group,
    isIndividual: isIndividual,
    providersFor: providersFor, logoFor: logoFor, shortLabel: shortLabel,
    isEndurance: isEndurance,
    browseList: browseList
  }
}
