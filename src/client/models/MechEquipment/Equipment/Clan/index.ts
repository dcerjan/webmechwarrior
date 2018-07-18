import { Tech } from '../../../common/Tech'
import { GearName as Name } from '../../GearName'
import {
  Equipment,
  EquipmentType as T,
} from '../Equipment'

export const HeatSinks = {
  [Name.C_Single_Heatsink]:      Equipment(Name.C_Single_Heatsink, T.Heatsink, Tech.Clan, 1.0, 1, 'Clan Single Heatsink'),
  [Name.C_Double_Heatsink]:      Equipment(Name.C_Double_Heatsink, T.Heatsink, Tech.Clan, 1.0, 2, 'Clan Double Heatsink') }
export const JumpJets = {
  [Name.C_Jump_Jet]:             Equipment(Name.C_Jump_Jet, T.Jump_Jet, Tech.Clan, 0.0, 1, 'Clan Jump Jet'),
  [Name.C_Improved_Jump_Jet]:    Equipment(Name.C_Improved_Jump_Jet, T.Improved_Jump_Jet, Tech.Clan, 0.0, 1, 'Clan Improved Jump Jet') }
export const InternalStructure = {
  [Name.C_Endo_Steel]:           Equipment(Name.C_Endo_Steel, T.Internal_Structure, Tech.Clan, 0.0, 1, 'Clan Endo-Steel Internal Structure') }
export const Armor = {
  [Name.C_Ferro_Fibrous]:        Equipment(Name.C_Ferro_Fibrous, T.Armor, Tech.Clan, 0.0, 1, 'Clan Ferro-Fibrous Armor') }
export const ActiveProbes = {
  [Name.C_Active_Probe]:         Equipment(Name.C_Active_Probe, T.Active_Probe, Tech.Clan, 1.0, 1, 'Clan Active Probe'),
  [Name.C_Light_Active_Probe]:   Equipment(Name.C_Light_Active_Probe, T.Active_Probe, Tech.Clan, 0.5, 1, 'Clan Light Active Probe') }
export const MASCs = {
  [Name.C_MASC]:                 Equipment(Name.C_MASC, T.MASC, Tech.Clan, 0.0, 0, 'Clan MASC') }
export const ECMs = {
  [Name.C_ECM_Suite]:            Equipment(Name.C_ECM_Suite, T.ECM, Tech.Clan, 1.0, 1, 'Clan ECM') }
export const TargetingComputers = {
  [Name.C_Targeting_Computer]:   Equipment(Name.C_Targeting_Computer, T.Targeting_Computer, Tech.Clan, 0.0, 0, 'Clan Targeting Computer') }
export const TAGs = {
  [Name.C_TAG]:                  Equipment(Name.C_TAG, T.TAG, Tech.Clan, 1.0, 1, 'Clan TAG Laser'),
  [Name.C_Light_TAG]:            Equipment(Name.C_Light_TAG, T.TAG, Tech.Clan, 1.0, 1, 'Clan Light TAG Laser') }

export const ClanEquipment = {
  ...HeatSinks,
  ...JumpJets,
  ...InternalStructure,
  ...Armor,
  ...ActiveProbes,
  ...MASCs,
  ...ECMs,
  ...TargetingComputers,
  ...TAGs,
}
