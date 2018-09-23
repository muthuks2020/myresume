
export default {

  namespace: 'resumeM',

  state: {
    skillList: [
      
      {
        name: 'Php',
        value: 80,
      },
      {
        name: 'PostgreSQL',
        value: 75,
      },
      {
        name: 'Mysql',
        value: 75,
      },
      {
        name: 'Mongo',
        value: 60,
      },{
        name: 'Html',
        value: 85,
      }, {
        name: 'TypeScript',
        value: 50,
      },{
        name: 'JavaScript',
        value: 80,
      }, 
      {
        name: 'Babel',
        value: 80,
      },{
        name: 'CSS,Less',
        value: 75,
      }, 
      {
        name: 'Node Js',
        value: 60,
      },
      {
        name: 'React',
        value: 60,
      },
      {
        name: 'Vue',
        value: 45,
      },
      {
        name: 'Angular',
        value: 60,
      }, {
        name: 'Webpack',
        value: 50,
      }, {
        name: 'Grunt',
        value: 80,
             },
       {
        name: 'JQuery',
        value: 80,
              },
              {
        name: 'Pega',
        value: 40,
        status: 'exception',
      },
    ],

    honorList: [
      "Phd (Data Mining)",
          
    ],
    carerIni: [
      
"APIs: All server side processes are in the form of reusable APIs accessed over HTTP by the javascript.",
"Headless CMS - Contentful",
"Markup: Templated markup built at either deploy time or processed dynamically by javascript on the client.",
      "Nunjucks:  a full featured templating engine for javascript.",
      "Netlify: to a Build & Hosting Service",
      "Heroku: which is   a container-based cloud Platform as a Service (PaaS)",
    ],
    educationList:[
      "2013.9~2017.6 one two", 
      "2010.9~2013.6 ",
      "2007.9~2010.6 ",
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
