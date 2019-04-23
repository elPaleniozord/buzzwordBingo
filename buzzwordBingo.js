const vocabulary = {
  adverbs: ['appropriately', 'assertively', 'authoritatively', 'collaboratively', 'compellingly', 'competently', 'completely',
  'continually', 'conveniently', 'credibly', 'distinctively', 'dramatically', 'dynamically', 'efficiently',
  'energistically', 'enthusiastically', 'globally', 'holisticly', 'interactively', 'intrinsically',
  'objectively', 'proactively', 'professionally', 'progressively', 'quickly', 'seamlessly', 'synergistically', 'uniquely'],

  verbs: ['actualize', 'administrate', 'aggregate', 'architect', 'benchmark', 'brand', 'build', 'communicate', 'conceptualize',
  'coordinate', 'create', 'cultivate', 'customize', 'deliver', 'deploy', 'develop', 'disintermediate', 'disseminate',
  'drive', 'embrace', 'empower', 'enable', 'engage', 'engineer', 'enhance', 'evolve', 'expedite', 'exploit', 'extend', 'fabricate', 'facilitate', 'fashion', 'formulate', 'foster', 'generate',
  'grow', 'harness', 'impact', 'implement', 'incentivize', 'incubate', 'initiate', 'innovate', 'integrate', 'iterate',
  'leverage existing', 'leverage other\'s', 'maintain', 'matrix', 'maximize', 'mesh', 'monetize', 'morph', 'negotiate', 'network', 'optimize', 'orchestrate', 'plagiarize', 'predominate', 'procrastinate', 'productivate', 'productize', 'promote', 'provide access to', 'pursue', 'reconceptualize', 'redefine', 're-engineer', 'reinvent', 'repurpose', 'restore', 'revolutionize', 'scale', 'seize', 'simplify', 'strategize', 'streamline', 'supply', 'syndicate', 'synergize', 'synthesize', 'target',
  'transform', 'transition', 'underwhelm', 'unleash', 'utilize', 'visualize', 'whiteboard'],

  adjectives: ['24/7', 'accurate', 'adaptive', 'alternative', 'B2B', 'B2C', 'backend', 'backward-compatible', 'bleeding-edge', 'business', 'client-based', 'client-centered', 'client-centric', 'client-focused', 'collaborative', 'compelling', 'competitive', 'cooperative', 'corporate', 'cost effective', 'covalent', 'cross functional', 'cross-media', 'cross-platform', 'cross-unit', 'customer directed', 'customized', 'cutting-edge', 'distinctive', 'distributed', 'diverse', 'dynamic', 'economically sound', 'effective', 'efficient', 'emerging', 'empowered', 'enabled', 'end-to-end', 'enterprise', 'error-free', 'ethical', 'excellent', 'exceptional', 'extensible', 'extensive', 'flexible', 'focused', 'frictionless', 'front-end', 'fully researched', 'fully tested', 'functional', 'future-proof', 'global', 'go forward', 'goal-oriented', 'granular', 'high standards in', 'high-payoff', 'high-quality', 'highly efficient', 'impactful', 'inexpensive', 'innovative', 'integrated', 'interactive', 'interdependent', 'intermandated', 'interoperable', 'intuitive', 'just in time', 'leveraged', 'long-term high-impact', 'low-risk high-yield', 'magnetic', 'maintainable', 'market positioning', 'market-driven', 'mission-critical', 'multidisciplinary', 'multifunctional', 'multimedia based', 'next-generation', 'one-to-one', 'open-source', 'optimal', 'orthogonal', 'out-of-the-box', 'pandemic', 'parallel', 'performance based', 'plug-and-play', 'premier', 'premium', 'principle-centered', 'proactive', 'process-centric', 'professional', 'progressive', 'prospective', 'quality', 'real-time', 'reliable', 'resource-sucking', 'resource-maximizing', 'resource-leveling', 'revolutionary', 'robust', 'scalable', 'seamless', 'stand-alone',
  'standardized', 'standards compliant', 'state of the art', 'sticky', 'strategic', 'superior', 'sustainable', 'synergistic', 'tactical', 'team building', 'team driven', 'technically sound', 'timely', 'top-line', 'transparent', 'turnkey', 'ubiquitous', 'unique', 'user-centric', 'user friendly', 'value-added', 'vertical', 'viral', 'virtual',
  'visionary', 'web-enabled', 'wireless', 'world-class', 'worldwide', 'fungible', 'cloud-ready', 'elastic', 'hyper-scale',
  'on-demand', 'cloud-based'],

  nouns: ['action items', 'alignments', 'applications', 'architectures', 'bandwidth', 'benefits',
  'best practices', 'catalysts for change', 'channels', 'collaboration and idea-sharing', 'communities', 'content',
  'convergence', 'core competencies', 'customer service', 'data', 'deliverables', 'e-business', 'e-commerce', 'e-markets',
  'e-tailers', 'e-services', 'experiences', 'expertise', 'functionalities', 'growth strategies', 'human capital',
  'ideas', 'imperatives', 'infomediaries', 'information', 'infrastructures', 'initiatives', 'innovation',
  'intellectual capital', 'interfaces', 'internal or "organic" sources', 'leadership', 'leadership skills',
  'manufactured products', 'markets', 'materials', 'meta-services', 'methodologies', 'methods of empowerment', 'metrics',
  'mindshare', 'models', 'networks', 'niches', 'niche markets', 'opportunities', '"outside the box" thinking', 'outsourcing',
  'paradigms', 'partnerships', 'platforms', 'portals', 'potentialities', 'process improvements', 'processes', 'products',
  'quality vectors', 'relationships', 'resources', 'results', 'ROI', 'scenarios', 'schemas', 'services', 'solutions',
  'sources', 'strategic theme areas', 'supply chains', 'synergy', 'systems', 'technologies', 'technology',
  'testing procedures', 'total linkage', 'users', 'value', 'vortals', 'web-readiness', 'web services', 'fungibility',
  'clouds', 'nosql', 'storage', 'virtualization']
}

class BuzzwordBingo {
  constructor(adverbs=2, verbs=1, adjectives=3, nouns=1){
    this.vocabulary = vocabulary
    this.config = {
      adverbs: adverbs,
      verbs: verbs,
      adjectives: adjectives,
      nouns: nouns
    }
  }

  get () {
    return this.generateSentence(this.config)
  }
  
  checkSeparator (grp, i) {
    const last = ' and '
    const second = ', '
    
    if(i+2 === grp){
      return last
    } else if (i+2 < grp) {
      return second
    } else return ' '
  }
  
  getRandomWord (grp) {
    const max = this.vocabulary[grp].length
    const random = Math.floor((Math.random() * max) +1)
    return vocabulary[grp][random]
  }
  
  generateSentence(config){
    let words = []
    for(let key in config){
      for(let i=0; i<config[key]; i++){
        const separator = this.checkSeparator(config[key], i)
        let word = this.getRandomWord(key)
        words.push(word+separator)
      }
    }
    //format string, capitalize, join, trim
    words[0]=words[0].charAt(0).toUpperCase()+words[0].slice(1)
    return words.join('').replace(/\W$/,'.')
  }  
}
