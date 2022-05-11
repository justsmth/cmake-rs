var searchIndex = JSON.parse('{\
"cmake":{"doc":"A build dependency for running <code>cmake</code> to build a native …","t":[3,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Config","always_configure","asmflag","borrow","borrow_mut","build","build","build_arg","build_target","cflag","configure_arg","cxxflag","define","env","from","generator","generator_toolset","get_profile","host","init_c_cfg","init_cxx_cfg","into","new","no_build_target","out_dir","pic","profile","register_dep","static_crt","target","try_from","try_into","type_id","uses_cxx11","very_verbose"],"q":["cmake","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Builder style configuration for a pending CMake build.","Forces CMake to always run before building the custom …","Adds a custom flag to pass down to the ASM compiler, …","","","Builds the native library rooted at <code>path</code> with the default …","Run this configuration, compiling the library with all the …","Add an argument to the final <code>cmake</code> build step","Sets the build target for the final <code>cmake</code> build step, this …","Adds a custom flag to pass down to the C compiler, …","Add an argument to the <code>cmake</code> configure step","Adds a custom flag to pass down to the C++ compiler, …","Adds a new <code>-D</code> flag to pass to cmake during the generation …","Configure an environment variable for the <code>cmake</code> processes …","Returns the argument unchanged.","Sets the build-tool generator (<code>-G</code>) for this compilation.","Sets the toolset name (-T) if supported by generator. Can …","Return explicitly set profile or infer <code>CMAKE_BUILD_TYPE</code> …","Sets the host triple for this compilation.","Initializes the C build configuration.","Initializes the C++ build configuration.","Calls <code>U::from(self)</code>.","Creates a new blank set of configuration to build the …","Disables the cmake target option for this compilation.","Sets the output directory for this compilation.","Sets flag for PIC. Otherwise use cc::Build platform default","Sets the <code>CMAKE_BUILD_TYPE=build_type</code> variable.","Registers a dependency for this compilation on the native …","Configures whether the /MT flag or the /MD flag will be …","Sets the target triple for this compilation.","","","","Alters the default target triple on OSX to ensure that …","Sets very verbose output."],"i":[0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[null,[[["",0],["bool",0]],["config",3]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0]],["",0]],[[["",0]],["",0]],[[["asref",8,[["path",3]]]],["pathbuf",3]],[[["",0]],["pathbuf",3]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0],["str",0]],["config",3]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0]],["config",3]],[[["",0]],["config",3]],[[]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0],["asref",8,[["osstr",3]]]],["config",3]],[[["",0]],["str",0]],[[["",0],["str",0]],["config",3]],[[["",0],["build",3]],["config",3]],[[["",0],["build",3]],["config",3]],[[]],[[["asref",8,[["path",3]]]],["config",3]],[[["",0],["bool",0]],["config",3]],[[["",0],["asref",8,[["path",3]]]],["config",3]],[[["",0],["bool",0]],["config",3]],[[["",0],["str",0]],["config",3]],[[["",0],["str",0]],["config",3]],[[["",0],["bool",0]],["config",3]],[[["",0],["str",0]],["config",3]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["config",3]],[[["",0],["bool",0]],["config",3]]],"p":[[3,"Config"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};