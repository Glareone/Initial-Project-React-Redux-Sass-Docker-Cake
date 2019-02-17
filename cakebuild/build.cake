#addin nuget:?package=Cake.Docker&version=0.9.3
#addin nuget:?package=Cake.FileHelpers&version=3.0.0
#addin nuget:?package=Cake.Npm&version=0.13.0
#addin nuget:?package=Cake.Json&version=3.0.1
#addin nuget:?package=Newtonsoft.Json&version=10.0.3

// ****************************************
//              Useful Notes
// ****************************************
//
// By default, this cake script locally will protect / prevent you from publishing docker images when you
// run it in your dev environment. However, should the need arise, you can override this safeguard by
// toggling the variable in the Settings section. You'll still be asked to authenticate though.

// THERE WILL BE YOUR BUILD.CAKE CONFIGURATION