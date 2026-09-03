// Canonical league slugs and their per-provider addresses.
//
// The rest of the plugin only ever says "mlb" or "eng.1". Which path that
// turns into on some vendor's host is this file's problem and nobody else's;
// a provider slug that escapes this module is a bug.

// group is the heading the league sorts under in the panel's league list.
var CATALOG = {
  // ---- North American majors
  "nfl":   { name: "NFL",           group: "Football",   espn: "football/nfl" , logo: "https://a.espncdn.com/i/teamlogos/leagues/500/nfl.png" },
  "ncaaf": { name: "NCAA Football", group: "Football",   espn: "football/college-football" },
  "nba":   { name: "NBA",           group: "Basketball", espn: "basketball/nba" , logo: "https://a.espncdn.com/i/teamlogos/leagues/500/nba.png" },
  "wnba":  { name: "WNBA",          group: "Basketball", espn: "basketball/wnba" , logo: "https://a.espncdn.com/i/teamlogos/leagues/500/wnba.png" },
  "ncaam": { name: "NCAA Men's",    group: "Basketball", espn: "basketball/mens-college-basketball" },
  "ncaaw": { name: "NCAA Women's",  group: "Basketball", espn: "basketball/womens-college-basketball" },
  "mlb":   { name: "MLB",           group: "Baseball",   espn: "baseball/mlb", statsapi: 1 , logo: "https://a.espncdn.com/i/teamlogos/leagues/500/mlb.png" },
  "ncaab": { name: "NCAA Baseball", group: "Baseball",   espn: "baseball/college-baseball" },
  "nhl":   { name: "NHL",           group: "Hockey",     espn: "hockey/nhl", nhlweb: true , logo: "https://a.espncdn.com/i/teamlogos/leagues/500/nhl.png" },

  // ---- Soccer. `soccer` is ESPN's cross-competition aggregate.
  "soccer":  { name: "All soccer",       group: "Soccer", espn: "soccer/all" },
  "mls":     { name: "MLS",              group: "Soccer", espn: "soccer/usa.1" , fotmob: { id: 130 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/19.png" },
  "eng.1":   { name: "Premier League",   group: "Soccer", espn: "soccer/eng.1" , fotmob: { id: 47 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/23.png" },
  "esp.1":   { name: "LaLiga",           group: "Soccer", espn: "soccer/esp.1" , fotmob: { id: 87 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/15.png" },
  "ger.1":   { name: "Bundesliga",       group: "Soccer", espn: "soccer/ger.1" , fotmob: { id: 54 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/10.png" },
  "ita.1":   { name: "Serie A",          group: "Soccer", espn: "soccer/ita.1" , fotmob: { id: 55 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/12.png" },
  "fra.1":   { name: "Ligue 1",          group: "Soccer", espn: "soccer/fra.1" , fotmob: { id: 53 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/9.png" },
  "ucl":     { name: "Champions League", group: "Soccer", espn: "soccer/uefa.champions" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2.png" },
  "uel":     { name: "Europa League",    group: "Soccer", espn: "soccer/uefa.europa" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2310.png" },
  "wc":      { name: "World Cup",        group: "Soccer", espn: "soccer/fifa.world" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/4.png" },
  "wwc":     { name: "Women's World Cup", group: "Soccer", espn: "soccer/fifa.wwc" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/6.png" },
  "bra.1":   { name: "Brasileirão",          group: "Soccer", espn: "soccer/bra.1" , fotmob: { id: 268 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/85.png" },
  "ned.1":   { name: "Eredivisie",           group: "Soccer", espn: "soccer/ned.1" , fotmob: { id: 57 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/11.png" },
  "ned.2":   { name: "Eerste Divisie",       group: "Soccer", espn: "soccer/ned.2" , fotmob: { id: 111 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/105.png" },
  "mex.1":   { name: "Liga MX",              group: "Soccer", espn: "soccer/mex.1" , fotmob: { id: 230 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/22.png" },
  "ksa.1":   { name: "Saudi Pro League",     group: "Soccer", espn: "soccer/ksa.1" , fotmob: { id: 536 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/2488.png" },
  "sco.1":   { name: "Scottish Premiership", group: "Soccer", espn: "soccer/sco.1" , fotmob: { id: 64 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/45.png" },
  "sui.1":   { name: "Swiss Super League",   group: "Soccer", espn: "soccer/sui.1" , fotmob: { id: 69 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/17.png" },
  "tur.1":   { name: "Süper Lig",            group: "Soccer", espn: "soccer/tur.1" , fotmob: { id: 71 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/18.png" },
  "bel.1":   { name: "Belgian Pro League",   group: "Soccer", espn: "soccer/bel.1" , fotmob: { id: 40 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/6.png" },
  "ger.2":   { name: "2. Bundesliga",        group: "Soccer", espn: "soccer/ger.2" , fotmob: { id: 146 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/97.png" },
  "esp.2":   { name: "LaLiga Hypermotion",   group: "Soccer", espn: "soccer/esp.2" , fotmob: { id: 140 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/107.png" },
  "swe.1":   { name: "Allsvenskan",          group: "Soccer", espn: "soccer/swe.1" , fotmob: { id: 67 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/16.png" },
  "nor.1":   { name: "Eliteserien",          group: "Soccer", espn: "soccer/nor.1" , fotmob: { id: 59 } },
  "nor.2":   { name: "Norwegian 1st Division", group: "Soccer", espn: "soccer/nor.2" , fotmob: { id: 203 } },
  "den.1":   { name: "Danish Superliga",     group: "Soccer", espn: "soccer/den.1" , fotmob: { id: 46 } },
  "chi.1":   { name: "Chinese Super League", group: "Soccer", espn: "soccer/chi.1" , logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/86.png" },
  "per.1":   { name: "Liga 1",               group: "Soccer", espn: "soccer/per.1" , fotmob: { id: 131 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/1813.png" },
  "aut.1":   { name: "Austrian Bundesliga",  group: "Soccer", espn: "soccer/aut.1" , fotmob: { id: 38 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/5.png" },
  "arg.1":   { name: "Primera División",     group: "Soccer", espn: "soccer/arg.1" , fotmob: { id: 112 }, logo: "https://a.espncdn.com/i/leaguelogos/soccer/500/1.png" },
  "cyp.1":   { name: "Cyprus League",        group: "Soccer", espn: "soccer/cyp.1" , fotmob: { id: 136 } },
  "cze.1":   { name: "Czech First League",   group: "Soccer", espn: "soccer/cze.1" , fotmob: { id: 122 } },

  // ---- Racing. ESPN carries these five and no more: there is no WEC, IMSA or
  // Le Mans here, which is why endurance racing needs its own source.
  "f1":       { name: "Formula 1",    group: "Racing", espn: "racing/f1", individual: true, logo: "https://a.espncdn.com/i/teamlogos/leagues/500/f1.png" },
  "indycar":  { name: "IndyCar",      group: "Racing", espn: "racing/irl", individual: true },
  "nascar":   { name: "NASCAR Cup",   group: "Racing", espn: "racing/nascar-premier", individual: true },
  "nascar-2": { name: "NASCAR Xfinity", group: "Racing", espn: "racing/nascar-secondary", individual: true },
  "nascar-3": { name: "NASCAR Trucks", group: "Racing", espn: "racing/nascar-truck", individual: true },

  // ---- Sports car racing, including Le Mans. Not on ESPN at all; served by
  // Al Kamel's official classifications. Results only, never live — see
  // Endurance.js.
  "wec":  { name: "FIA WEC",   group: "Racing", espn: "", individual: true, endurance: true },
  "elms": { name: "Le Mans Series", group: "Racing", espn: "", individual: true, endurance: true },
  "imsa": { name: "IMSA",      group: "Racing", espn: "", individual: true, endurance: true },
  "lemans": { name: "24 Hours of Le Mans", group: "Racing", espn: "", individual: true, endurance: true },

  // ---- Individual sports. No teams to follow, so these are browse-only.
  "ufc": { name: "UFC", group: "Other", espn: "mma/ufc", individual: true },
  "pga": { name: "PGA", group: "Other", espn: "golf/pga", individual: true },
  "atp": { name: "ATP", group: "Other", espn: "tennis/atp", individual: true },
  "wta": { name: "WTA", group: "Other", espn: "tennis/wta", individual: true }
};

// Leagues offered in the panel's league list, in display order. A user can
// still name any other slug in `leagues` — see resolve() — this is only what
// gets browsed without typing.
var BROWSE_ORDER = [
  "nfl", "ncaaf", "nba", "wnba", "ncaam", "mlb", "nhl",
  "eng.1", "esp.1", "ger.1", "ger.2", "ita.1", "fra.1", "bra.1", "ned.1", "ned.2",
  "mex.1", "ksa.1", "sco.1", "sui.1", "tur.1", "bel.1", "mls", "ucl", "uel", "wc",
  "swe.1", "nor.1", "nor.2", "den.1", "chi.1", "per.1", "aut.1", "arg.1", "esp.2", "cyp.1", "cze.1",
  "f1", "indycar", "nascar", "nascar-2", "nascar-3", "lemans", "wec", "elms", "imsa",
  "ufc", "pga", "atp"
];

// ESPN publishes ~216 soccer competitions and a comparable tail elsewhere.
// Rather than enumerate them, any slug this file does not know is passed
// through: "sport/league" verbatim, and a bare "ned.1"-shaped slug is assumed
// to be soccer, which is the only family that uses that form.
function resolve(slug) {
  var id = String(slug || "").trim()
  if (id === "") return null
  if (CATALOG.hasOwnProperty(id)) {
    var known = CATALOG[id]
    return {
      id: id, name: known.name, group: known.group, espn: known.espn,
      statsapi: known.statsapi || 0, nhlweb: known.nhlweb === true,
      fotmob: known.fotmob || null,
      individual: known.individual === true, endurance: known.endurance === true,
      logo: known.logo || "", known: true
    }
  }
  var espn = id.indexOf("/") >= 0 ? id : (/^[a-z]{3}\.\d+$/.test(id) ? "soccer/" + id : "")
  if (espn === "") return null
  return {
    id: id, name: id, group: "Other", espn: espn,
    statsapi: 0, nhlweb: false, fotmob: null,
    individual: false, endurance: false, logo: "", known: false
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
  return league ? league.name : String(slug || "")
}

function group(slug) {
  var league = resolve(slug)
  return league ? league.group : "Other"
}

function isEndurance(slug) {
  var league = resolve(slug)
  return league ? league.endurance : false
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
  // Endurance has exactly one source and it is not ESPN.
  if (league.endurance) return ["endurance"]
  var capable = ["espn"]
  if (league.statsapi) capable.push("mlb")
  if (league.nhlweb) capable.push("nhl")
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
    resolve: resolve,
    displayName: displayName,
    group: group,
    isIndividual: isIndividual,
    providersFor: providersFor, logoFor: logoFor, shortLabel: shortLabel,
    isEndurance: isEndurance,
    browseList: browseList
  }
}
