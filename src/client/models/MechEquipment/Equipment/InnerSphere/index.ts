import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Equipment,
  EquipmentType as T,
} from '../Equipment'

export const HeatSinks = {
  [Name.IS_Single_Heatsink]:      Equipment(Name.IS_Single_Heatsink, T.Heatsink, Tech.IS, 1.0, 1, 'Inner Sphere Single Heatsink'),
  [Name.IS_Double_Heatsink]:      Equipment(Name.IS_Double_Heatsink, T.Heatsink, Tech.IS, 1.0, 3, 'Inner Sphere Double Heatsink') }
export const JumpJets = {
  [Name.IS_Jump_Jet]:             Equipment(Name.IS_Jump_Jet, T.Jump_Jet, Tech.IS, 0.0, 1, 'Inner Sphere Jump Jet'),
  [Name.IS_Improved_Jump_Jet]:    Equipment(Name.IS_Improved_Jump_Jet, T.Improved_Jump_Jet, Tech.IS, 0.0, 1, 'Inner Sphere Improved Jump Jet') }
export const InternalStructure = {
  [Name.IS_Endo_Steel]:           Equipment(Name.IS_Endo_Steel, T.Internal_Structure, Tech.IS, 0.0, 1, 'Inner Sphere Endo-Steel Internal Structure') }
export const Armor = {
  [Name.IS_Ferro_Fibrous]:        Equipment(Name.IS_Ferro_Fibrous, T.Armor, Tech.IS, 0.0, 1, 'Inner Sphere Ferro-Fibrous Armor'),
  [Name.IS_Light_Ferro]:          Equipment(Name.IS_Light_Ferro,   T.Armor, Tech.IS, 0.0, 1, 'Inner Sphere Light Ferro-Aluminum'),
  [Name.IS_Heavy_Ferro]:          Equipment(Name.IS_Heavy_Ferro,   T.Armor, Tech.IS, 0.0, 1, 'Inner Sphere Heavy Ferro-Aluminum'),
  [Name.IS_Stealth_Armor]:        Equipment(Name.IS_Stealth_Armor, T.Armor, Tech.IS, 0.0, 1, 'Inner Sphere Stealth Armor') }
export const ActiveProbes = {
  [Name.IS_Beagle_Active_Probe]:  Equipment(Name.IS_Beagle_Active_Probe, T.Active_Probe, Tech.IS, 1.5, 2, 'Inner Sphere Beagle Active Probe') }
export const CASEs = {
  [Name.IS_CASE]:                 Equipment(Name.IS_CASE, T.CASE, Tech.IS, 0.5, 1, 'Inner Sphere CASE') }
export const MASCs = {
  [Name.IS_MASC]:                 Equipment(Name.IS_MASC, T.MASC, Tech.IS, 0.0, 0, 'Inner Sphere MASC') }
export const TSMs = {
  [Name.IS_TSM]:                  Equipment(Name.IS_TSM, T.TSM, Tech.IS, 0.0, 1, 'Inner Sphere TSM') }
export const C3Computers = {
  [Name.IS_C3_Master_Computer]:   Equipment(Name.IS_C3_Master_Computer, T.C3_Computer, Tech.IS, 5.0, 5, 'Inner Sphere C3 Master Computer'),
  [Name.IS_C3_Slave_Computer]:    Equipment(Name.IS_C3_Slave_Computer,  T.C3_Computer, Tech.IS, 1.0, 1, 'Inner Sphere C3 Slave Computer'),
  [Name.IS_Improved_C3_Computer]: Equipment(Name.IS_C3_Master_Computer, T.C3_Computer, Tech.IS, 2.5, 2, 'Inner Sphere Improved C3 Computer') }
export const ECMs = {
  [Name.IS_Guardian_ECM]:         Equipment(Name.IS_Guardian_ECM, T.ECM, Tech.IS, 1.5, 2, 'Inner Sphere ECM') }
export const TargetingComputers = {
  [Name.IS_Targeting_Computer]:   Equipment(Name.IS_Targeting_Computer, T.Targeting_Computer, Tech.IS, 0.0, 0, 'Inner Sphere Targeting Computer') }
export const TAGs = {
  [Name.IS_TAG]:                  Equipment(Name.IS_TAG, T.TAG, Tech.IS, 1.0, 1, 'Inner Sphere TAG Laser') }

export const InnerSphereEquipment = {
  ...HeatSinks,
  ...JumpJets,
  ...InternalStructure,
  ...Armor,
  ...ActiveProbes,
  ...CASEs,
  ...MASCs,
  ...TSMs,
  ...C3Computers,
  ...ECMs,
  ...TargetingComputers,
  ...TAGs,
}
