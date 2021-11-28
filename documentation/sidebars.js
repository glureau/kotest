module.exports = {
   docs: [
      'quickstart',
      'changelog',
      'blogs',
   ],
   proptest: [
      'proptest/index',
      'proptest/testfunctions',
      'proptest/gens',
      'proptest/genslist',
      'proptest/genops',
      'proptest/proptestconfig',
      'proptest/customgens',
      'proptest/globalconfig',
      'proptest/arrow',
   ],
   intellij: [
      'intellij/index',
      'intellij/test_explorer',
      'intellij/props',
   ],
   extensions: [
      'extensions/index',
      'extensions/spring',
      'extensions/ktor',
      'extensions/system_extensions',
      'extensions/test_containers',
      'extensions/kafka',
      'extensions/mockserver',
      'extensions/junit_xml',
      'extensions/html_reporter',
      'extensions/allure',
      'extensions/instant',
      'extensions/koin',
      'extensions/wiremock',
      'extensions/robolectric',
      'extensions/pitest',
   ],
   assertions: [
      'assertions/index',
      'assertions/matchers',
      'assertions/exceptions',
      'assertions/clues',
      'assertions/soft_assertions',
      {
         type: "category",
         label: "Non-deterministic Testing",
         collapsed: false,
         items: [
            'assertions/eventually',
            'assertions/continually',
            'assertions/until',
            'assertions/retry',
         ]
      },
      'assertions/inspectors',
      'assertions/assertion_mode',
      {
         type: "category",
         label: "Matcher Modules",
         collapsed: false,
         items: [
            'assertions/core',
            'assertions/json',
            'assertions/ktor',
            'assertions/android_matchers',
            'assertions/kotlinx_datetime',
            'assertions/arrow',
            'assertions/sql-matchers',
            'assertions/konform',
            'assertions/klock',
            'assertions/compiler',
            'assertions/jsoup',
         ]
      }
   ],
   framework: [
      'framework/index',
      'framework/writing_tests',
      'framework/styles',
      'framework/conditional_evaluation',
      'framework/isolation_mode',
      'framework/exceptions',
      {
         type: "category",
         label: "Coroutines",
         collapsed: true,
         items: [
            'framework/test_coroutine_dispatcher',
         ]
      },
      {
         type: "category",
         label: "Data Driven Testing",
         collapsed: true,
         items: [
            'framework/datatesting/introduction',
            'framework/datatesting/nested',
            'framework/datatesting/custom-test-names',
         ]
      },
      {
         type: "category",
         label: "Non-deterministic Testing",
         collapsed: true,
         items: [
            'framework/concurrency/eventually',
            'assertions/continually',
            'assertions/until',
            'assertions/retry',
         ]
      },
      'framework/listeners',
      {
         type: "category",
         label: "Integrations",
         collapsed: true,
         items: [
            'framework/integrations/mocks',
            'framework/integrations/jacoco',
         ]
      },
      {
         type: "category",
         label: "Ordering",
         collapsed: true,
         items: [
            'framework/spec_ordering',
            'framework/test_ordering',
         ]
      },
      'framework/tags',
      {
         type: "category",
         label: "Resources",
         collapsed: true,
         items: [
            'framework/autoclose',
            'framework/tempfile',
         ]
      },
      {
         type: "category",
         label: "Configuration",
         collapsed: true,
         items: [
            'framework/test_case_config',
            'framework/project_config',
            'framework/framework_config_props',
         ]
      },
      'framework/test_extensions',
      'framework/test_factories',
      {
         type: "category",
         label: "Timeouts",
         collapsed: true,
         items: [
            'framework/test_timeouts',
            'framework/project_timeout',
         ]
      },
   ],
};
