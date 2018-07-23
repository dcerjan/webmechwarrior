

export enum GearClass {
  Weapon           = 'Weapon',
  Ammo             = 'Ammo',
  Equipment        = 'Equipment',
  SpecialEquipment = 'SpecialEquipment',
}


export enum GearName {
  // Builtin
  Cockpit            = 'Cockpit',
  Sensors            = 'Sensors',
  Life_Support       = 'Life Support',
  Engine             = 'Engine',
  Gyro               = 'Gyro',
  Shoulder_Actuator  = 'Shoulder Actuator',
  Upper_Arm_Actuator = 'Upper Arm Actuator',
  Lower_Arm_Actuator = 'Upper Arm Actuator',
  Hand_Actuator      = 'Hand Actuator',
  Hip_Actuator       = 'Hip Actuator',
  Upper_Leg_Actuator = 'Upper Leg Actuator',
  Lower_Leg_Actuator = 'Upper Leg Actuator',
  Foot_Actuator      = 'Foot Actuator',

  // Inner Sphere Gear
  IS_Autocannon_2 = 'IS Autocannon/2',
  IS_Autocannon_5 = 'IS Autocannon/5',
  IS_Autocannon_10 = 'IS Autocannon/10',
  IS_Autocannon_20 = 'IS Autocannon/20',
  IS_LB_2X_Autocannon = 'IS LB 2-X Autocannon',
  IS_LB_5X_Autocannon = 'IS LB 5-X Autocannon',
  IS_LB_10X_Autocannon = 'IS LB 10-X Autocannon',
  IS_LB_20X_Autocannon = 'IS LB 20-X Autocannon',
  IS_Light_Autocannon_2 = 'IS Light Autocannon/2',
  IS_Light_Autocannon_5 = 'IS Light Autocannon/5',
  IS_Rotary_Autocannon_2 = 'IS Rotary Autocannon/2',
  IS_Rotary_Autocannon_5 = 'IS Rotary Autocannon/5',
  IS_Ultra_Autocannon_2 = 'IS Ultra Autocannon/2',
  IS_Ultra_Autocannon_5 = 'IS Ultra Autocannon/5',
  IS_Ultra_Autocannon_10 = 'IS Ultra Autocannon/10',
  IS_Ultra_Autocannon_20 = 'IS Ultra Autocannon/20',
  IS_Gauss_Rifle = 'IS Gauss Rifle',
  IS_Light_Gauss_Rifle = 'IS Light Gauss Rifle',
  IS_Heavy_Gauss_Rifle = 'IS Heavy Gauss Rifle',
  IS_Light_Machine_Gun = 'IS Light Machine Gun',
  IS_Machine_Gun = 'IS Machine Gun',
  IS_Heavy_Machine_Gun = 'IS Heavy Machine Gun',
  IS_AMS = 'IS AMS',
  IS_ER_Small_Laser = 'IS ER Small Laser',
  IS_ER_Medium_Laser = 'IS ER Medium Laser',
  IS_ER_Large_Laser = 'IS ER Large Laser',
  IS_Small_Laser = 'IS Small Laser',
  IS_Medium_Laser = 'IS Medium Laser',
  IS_Large_Laser = 'IS Large Laser',
  IS_Small_Pulse_Laser = 'IS Small Pulse Laser',
  IS_Medium_Pulse_Laser = 'IS Medium Pulse Laser',
  IS_Large_Pulse_Laser = 'IS Large Pulse Laser',
  IS_Flamer = 'IS Flamer',
  IS_Vehicle_Flamer = 'IS Vehicle Flamer',
  IS_Plasma_Rifle = 'IS Plasma Rifle',
  IS_Light_PPC = 'IS Light PPC',
  IS_PPC = 'IS PPC',
  IS_Heavy_PPC = 'IS Heavy PPC',
  IS_ER_PPC = 'IS ER PPC',
  IS_Snub_Nose_PPC = 'IS Snub-Nose PPC',
  IS_LAMS = 'IS LAMS',
  IS_LRM_5 = 'IS LRM 5',
  IS_LRM_10 = 'IS LRM 10',
  IS_LRM_15 = 'IS LRM 15',
  IS_LRM_20 = 'IS LRM 20',
  IS_LRM_5_Artemis_IV = 'IS LRM 5 + Artemis IV',
  IS_LRM_10_Artemis_IV = 'IS LRM 10 + Artemis IV',
  IS_LRM_15_Artemis_IV = 'IS LRM 15 + Artemis IV',
  IS_LRM_20_Artemis_IV = 'IS LRM 20 + Artemis IV',
  IS_MRM_10 = 'IS MRM 10',
  IS_MRM_20 = 'IS MRM 20',
  IS_MRM_30 = 'IS MRM 30',
  IS_MRM_40 = 'IS MRM 40',
  IS_SRM_2 = 'IS SRM 2',
  IS_SRM_4 = 'IS SRM 4',
  IS_SRM_6 = 'IS SRM 6',
  IS_SRM_2_Artemis_IV = 'IS SRM 2 + Artemis IV',
  IS_SRM_4_Artemis_IV = 'IS SRM 4 + Artemis IV',
  IS_SRM_6_Artemis_IV = 'IS SRM 6 + Artemis IV',
  IS_Streak_SRM_2 = 'IS Streak SRM 2',
  IS_Streak_SRM_4 = 'IS Streak SRM 4',
  IS_Streak_SRM_6 = 'IS Streak SRM 6',
  IS_MML_3 = 'IS MML 3',
  IS_MML_5 = 'IS MML 5',
  IS_MML_7 = 'IS MML 7',
  IS_MML_9 = 'IS MML 9',
  IS_MML_3_Artemis_IV = 'IS MML 3 + Artemis IV',
  IS_MML_5_Artemis_IV = 'IS MML 5 + Artemis IV',
  IS_MML_7_Artemis_IV = 'IS MML 7 + Artemis IV',
  IS_MML_9_Artemis_IV = 'IS MML 9 + Artemis IV',
  IS_Rocket_Launcher_10 = 'IS Rocket Launcher 10',
  IS_Rocket_Launcher_15 = 'IS Rocket Launcher 15',
  IS_Rocket_Launcher_20 = 'IS Rocket Launcher 20',
  IS_NARC_Launcher = 'IS NARC Launcher',
  IS_Improved_NARC_Launcher = 'IS Improved NARC Launcher',
  IS_Single_Heatsink      = 'IS Single Heatsink',
  IS_Double_Heatsink      = 'IS Double Heatsink',
  IS_Jump_Jet             = 'IS Jump Jet',
  IS_Improved_Jump_Jet    = 'IS Improved Jump Jet',
  IS_Endo_Steel           = 'IS Endo Steel',
  IS_Ferro_Fibrous        = 'IS Ferro Fibrous',
  IS_Light_Ferro          = 'IS Light Ferro',
  IS_Heavy_Ferro          = 'IS Heavy Ferro',
  IS_Stealth_Armor        = 'IS Stealth Armor',
  IS_Beagle_Active_Probe  = 'IS Beagle Active Probe',
  IS_CASE                 = 'IS CASE',
  IS_MASC                 = 'IS MASC',
  IS_TSM                  = 'IS TSM',
  IS_C3_Master_Computer   = 'IS C3 Master Computer',
  IS_C3_Slave_Computer    = 'IS C3 Slave Computer',
  IS_Improved_C3_Computer = 'IS Improved C3 Computer',
  IS_Guardian_ECM         = 'IS Guardian ECM',
  IS_Targeting_Computer   = 'IS Targeting Computer',
  IS_TAG                  = 'IS TAG',
  IS_AC2_Ammo                = 'IS AC/2 Ammo',
  IS_AC2_AP_Ammo             = 'IS AC/2 AP Ammo',
  IS_AC2_Flechette_Ammo      = 'IS AC/2 Flechette Ammo',
  IS_AC2_Precision_Ammo      = 'IS AC/2 Precision Ammo',
  IS_AC5_Ammo                = 'IS AC/5 Ammo',
  IS_AC5_AP_Ammo             = 'IS AC/5 AP Ammo',
  IS_AC5_Flechette_Ammo      = 'IS AC/5 Flechette Ammo',
  IS_AC5_Precision_Ammo      = 'IS AC/5 Precision Ammo',
  IS_AC10_Ammo               = 'IS AC/10 Ammo',
  IS_AC10_AP_Ammo            = 'IS AC/10 AP Ammo',
  IS_AC10_Flechette_Ammo     = 'IS AC/10 Flechette Ammo',
  IS_AC10_Precision_Ammo     = 'IS AC/10 Precision Ammo',
  IS_AC20_Ammo               = 'IS AC/20 Ammo',
  IS_AC20_AP_Ammo            = 'IS AC/20 AP Ammo',
  IS_AC20_Flechette_Ammo     = 'IS AC/20 Flechette Ammo',
  IS_AC20_Precision_Ammo     = 'IS AC/20 Precision Ammo',
  IS_LB_2X_AC_Ammo           = 'IS LB 2-X AC Ammo',
  IS_LB_2X_AC_Cluster_Ammo   = 'IS LB 2-X AC Cluster Ammo',
  IS_LB_5X_AC_Ammo           = 'IS LB 5-X AC Ammo',
  IS_LB_5X_AC_Cluster_Ammo   = 'IS LB 5-X AC Cluster Ammo',
  IS_LB_10X_AC_Ammo          = 'IS LB 10-X AC Ammo',
  IS_LB_10X_AC_Cluster_Ammo  = 'IS LB 10-X AC Cluster Ammo',
  IS_LB_20X_AC_Ammo          = 'IS LB 20-X AC Ammo',
  IS_LB_20X_AC_Cluster_Ammo  = 'IS LB 20-X AC Cluster Ammo',
  IS_LAC2_Ammo               = 'IS LAC/2 Ammo',
  IS_LAC2_AP_Ammo            = 'IS LAC/2 AP Ammo',
  IS_LAC2_Flechette_Ammo     = 'IS LAC/2 Flechette Ammo',
  IS_LAC2_Precision_Ammo     = 'IS LAC/2 Precision Ammo',
  IS_LAC5_Ammo               = 'IS LAC/5 Ammo',
  IS_LAC5_AP_Ammo            = 'IS LAC/5 AP Ammo',
  IS_LAC5_Flechette_Ammo     = 'IS LAC/5 Flechette Ammo',
  IS_LAC5_Precision_Ammo     = 'IS LAC/5 Precision Ammo',
  IS_RAC2_Ammo               = 'IS RAC/2 Ammo',
  IS_RAC5_Ammo               = 'IS RAC/5 Ammo',
  IS_UAC2_Ammo               = 'IS UAC/2 Ammo',
  IS_UAC5_Ammo               = 'IS UAC/5 Ammo',
  IS_UAC10_Ammo              = 'IS UAC/10 Ammo',
  IS_UAC20_Ammo              = 'IS UAC/20 Ammo',
  IS_Light_Gauss_Ammo        = 'IS Light Gauss Ammo',
  IS_Gauss_Ammo              = 'IS Gauss Ammo',
  IS_Heavy_Gauss_Ammo        = 'IS Heavy Gauss Ammo',
  IS_LMG_Ammo                = 'IS LMG Ammo',
  IS_LMG_Half_Ammo           = 'IS LMG Ammo (1/2)',
  IS_MG_Ammo                 = 'IS MG Ammo',
  IS_MG_Half_Ammo            = 'IS MG Ammo (1/2)',
  IS_HMG_Ammo                = 'IS HMG Ammo',
  IS_HMG_Half_Ammo           = 'IS HMG Ammo (1/2)',
  IS_AMS_Ammo                = 'IS AMS Ammo',
  IS_Flamer_Ammo             = 'IS Flamer Ammo',
  IS_Plasma_Rifle_Ammo       = 'IS Plasma Rifle Ammo',
  IS_LRM_Ammo                = 'IS LRM Ammo',
  IS_LRM_Artemis_Ammo        = 'IS LRM + Artemis Ammo',
  IS_LRM_Fragmentation_Ammo  = 'IS LRM Fragmentation Ammo',
  IS_LRM_Incendiary_Ammo     = 'IS LRM Incendiary Ammo',
  IS_LRM_SWARM_Ammo          = 'IS LRM SWARM Ammo',
  IS_LRM_Flare_Ammo          = 'IS LRM Flare Ammo',
  IS_MRM_Ammo                = 'IS MRM Ammo',
  IS_SRM_Ammo                = 'IS SRM Ammo',
  IS_SRM_Artemis_Ammo        = 'IS SRM + Artemis Ammo',
  IS_SRM_Fragmentation_Ammo  = 'IS SRM Fragmentation Ammo',
  IS_SRM_Inferno_Ammo        = 'IS SRM Inferno Ammo',
  IS_Streak_SRM_Ammo         = 'IS Streak SRM Ammo',
  IS_NARC_Ammo               = 'IS NARC Ammo',
  IS_NARC_Explosive_Ammo     = 'IS NARC Explosive Ammo',
  IS_NARC_ECM_Ammo           = 'IS NARC ECM Ammo',
  IS_NARC_Haywire_Ammo       = 'IS NARC Haywire Ammo',
  IS_NARC_Nemesis_Ammo       = 'IS NARC Nemesis Ammo',

  // Clan Gear
  C_LB_2X_Autocannon = 'C LB 2-X Autocannon',
  C_LB_5X_Autocannon = 'C LB 5-X Autocannon',
  C_LB_10X_Autocannon = 'C LB 10-X Autocannon',
  C_LB_20X_Autocannon = 'C LB 20-X Autocannon',
  C_Ultra_Autocannon_2 = 'C Ultra Autocannon/2',
  C_Ultra_Autocannon_5 = 'C Ultra Autocannon/5',
  C_Ultra_Autocannon_10 = 'C Ultra Autocannon/10',
  C_Ultra_Autocannon_20 = 'C Ultra Autocannon/20',
  C_Gauss_Rifle = 'C Gauss Rifle',
  C_AP_Gauss_Rifle = 'C AP Gauss Rifle',
  C_Hyper_Assault_Gauss_20 = 'C Hyper-Assault Gauss Rifle 20',
  C_Hyper_Assault_Gauss_30 = 'C Hyper-Assault Gauss Rifle 30',
  C_Hyper_Assault_Gauss_40 = 'C Hyper-Assault Gauss Rifle 40',
  C_Light_Machine_Gun = 'C Light Machine Gun',
  C_Machine_Gun = 'C Machine Gun',
  C_Heavy_Machine_Gun = 'C Heavy Machine Gun',
  C_AMS = 'C AMS',
  C_ER_Micro_Laser = 'C ER Micro Laser',
  C_ER_Small_Laser = 'C ER Small Laser',
  C_ER_Medium_Laser = 'C ER Medium Laser',
  C_ER_Large_Laser = 'C ER Large Laser',
  C_Micro_Pulse_Laser = 'C Micro Pulse Laser',
  C_Small_Pulse_Laser = 'C Small Pulse Laser',
  C_Medium_Pulse_Laser = 'C Medium Pulse Laser',
  C_Large_Pulse_Laser = 'C Large Pulse Laser',
  C_Heavy_Small_Laser = 'C Heavy Small Laser',
  C_Heavy_Medium_Laser = 'C Heavy Medium Laser',
  C_Heavy_Large_Laser = 'C Heavy Large Laser',
  C_Flamer = 'C Flamer',
  C_Vehicle_Flamer = 'C Vehicle Flamer',
  C_Plasma_Cannon = 'C Plasma Cannon',
  C_ER_PPC = 'C ER PPC',
  C_LAMS = 'C LAMS',
  C_LRM_5 = 'C LRM 5',
  C_LRM_10 = 'C LRM 10',
  C_LRM_15 = 'C LRM 15',
  C_LRM_20 = 'C LRM 20',
  C_LRM_5_Artemis_IV = 'C LRM 5 + Artemis IV',
  C_LRM_10_Artemis_IV = 'C LRM 10 + Artemis IV',
  C_LRM_15_Artemis_IV = 'C LRM 15 + Artemis IV',
  C_LRM_20_Artemis_IV = 'C LRM 20 + Artemis IV',
  C_SRM_2 = 'C SRM 2',
  C_SRM_4 = 'C SRM 4',
  C_SRM_6 = 'C SRM 6',
  C_SRM_2_Artemis_IV = 'C SRM 2 + Artemis IV',
  C_SRM_4_Artemis_IV = 'C SRM 4 + Artemis IV',
  C_SRM_6_Artemis_IV = 'C SRM 6 + Artemis IV',
  C_Streak_SRM_2 = 'C Streak SRM 2',
  C_Streak_SRM_4 = 'C Streak SRM 4',
  C_Streak_SRM_6 = 'C Streak SRM 6',
  C_ATM_3 = 'C ATM 3',
  C_ATM_6 = 'C ATM 6',
  C_ATM_9 = 'C ATM 9',
  C_ATM_12 = 'C ATM 12',
  C_NARC_Launcher = 'C NARC Launcher',
  C_Single_Heatsink = 'C Single Heatsink',
  C_Double_Heatsink = 'C Double Heatsink',
  C_Jump_Jet = 'C Jump Jet',
  C_Improved_Jump_Jet = 'C Improved Jump Jet',
  C_Endo_Steel = 'C Endo Steel',
  C_Ferro_Fibrous = 'C Ferro Fibrous',
  C_Active_Probe = 'C Active Probe',
  C_Light_Active_Probe = 'C Light Active Probe',
  C_MASC = 'C MASC',
  C_ECM_Suite = 'C ECM Suite',
  C_Targeting_Computer = 'C Targeting Computer',
  C_TAG = 'C TAG',
  C_Light_TAG = 'C Light Tag',
  C_LB_2X_AC_Ammo= 'C LB 2-X AC Ammo',
  C_LB_2X_AC_Cluster_Ammo= 'C LB 2-X AC Cluster Ammo',
  C_LB_5X_AC_Ammo= 'C LB 5-X AC Ammo',
  C_LB_5X_AC_Cluster_Ammo= 'C LB 5-X AC Cluster Ammo',
  C_LB_10X_AC_Ammo= 'C LB 10-X AC Ammo',
  C_LB_10X_AC_Cluster_Ammo= 'C LB 10-X AC Cluster Ammo',
  C_LB_20X_AC_Ammo= 'C LB 20-X AC Ammo',
  C_LB_20X_AC_Cluster_Ammo= 'C LB 20-X AC Cluster Ammo',
  C_UAC2_Ammo= 'C UAC/2 Ammo',
  C_UAC5_Ammo= 'C UAC/5 Ammo',
  C_UAC10_Ammo= 'C UAC/10 Ammo',
  C_UAC20_Ammo= 'C UAC/20 Ammo',
  C_Gauss_Ammo= 'C Gauss Ammo',
  C_AP_Gauss_Ammo= 'C AP Gauss Ammo',
  C_HAG_Ammo= 'C HAG Ammo',
  C_LMG_Ammo= 'C LMG Ammo',
  C_LMG_Half_Ammo= 'C LMG Ammo (1/2)',
  C_MG_Ammo= 'C MG Ammo',
  C_MG_Half_Ammo= 'C MG Ammo (1/2)',
  C_HMG_Ammo= 'C HMG Ammo',
  C_HMG_Half_Ammo= 'C HMG Ammo (1/2)',
  C_AMS_Ammo= 'C AMS Ammo',
  C_Flamer_Ammo= 'C Flamer Ammo',
  C_Plasma_Cannon_Ammo= 'C Plasma Cannon Ammo',
  C_ATM_Ammo= 'C ATM Ammo',
  C_ATM_ER_Ammo= 'C ATM ER Ammo',
  C_ATM_HE_Ammo= 'C ATM HE Ammo',
  C_LRM_Ammo= 'C LRM Ammo',
  C_LRM_Artemis_Ammo= 'C LRM + Artemis Ammo',
  C_LRM_Fragmentation_Ammo= 'C LRM Fragmentation Ammo',
  C_LRM_SWARM_Ammo= 'C LRM SWARM Ammo',
  C_LRM_Flare_Ammo= 'C LRM Flare Ammo',
  C_SRM_Ammo= 'C SRM Ammo',
  C_SRM_Artemis_Ammo= 'C SRM + Artemis Ammo',
  C_SRM_Fragmentation_Ammo= 'C SRM Fragmentation Ammo',
  C_SRM_Inferno_Ammo= 'C SRM Inferno Ammo',
  C_Streak_SRM_Ammo= 'C Streak SRM Ammo',
  C_NARC_Ammo= 'C NARC Ammo',
}

export type WeaponName =
  | GearName.IS_Autocannon_2
  | GearName.IS_Autocannon_5
  | GearName.IS_Autocannon_10
  | GearName.IS_Autocannon_20
  | GearName.IS_LB_2X_Autocannon
  | GearName.IS_LB_5X_Autocannon
  | GearName.IS_LB_10X_Autocannon
  | GearName.IS_LB_20X_Autocannon
  | GearName.IS_Light_Autocannon_2
  | GearName.IS_Light_Autocannon_5
  | GearName.IS_Rotary_Autocannon_2
  | GearName.IS_Rotary_Autocannon_5
  | GearName.IS_Ultra_Autocannon_2
  | GearName.IS_Ultra_Autocannon_5
  | GearName.IS_Ultra_Autocannon_10
  | GearName.IS_Ultra_Autocannon_20
  | GearName.IS_Gauss_Rifle
  | GearName.IS_Light_Gauss_Rifle
  | GearName.IS_Heavy_Gauss_Rifle
  | GearName.IS_Light_Machine_Gun
  | GearName.IS_Machine_Gun
  | GearName.IS_Heavy_Machine_Gun
  | GearName.IS_AMS
  | GearName.IS_ER_Small_Laser
  | GearName.IS_ER_Medium_Laser
  | GearName.IS_ER_Large_Laser
  | GearName.IS_Small_Laser
  | GearName.IS_Medium_Laser
  | GearName.IS_Large_Laser
  | GearName.IS_Small_Pulse_Laser
  | GearName.IS_Medium_Pulse_Laser
  | GearName.IS_Large_Pulse_Laser
  | GearName.IS_Flamer
  | GearName.IS_Vehicle_Flamer
  | GearName.IS_Plasma_Rifle
  | GearName.IS_Light_PPC
  | GearName.IS_PPC
  | GearName.IS_Heavy_PPC
  | GearName.IS_ER_PPC
  | GearName.IS_Snub_Nose_PPC
  | GearName.IS_LAMS
  | GearName.IS_LRM_5
  | GearName.IS_LRM_10
  | GearName.IS_LRM_15
  | GearName.IS_LRM_20
  | GearName.IS_LRM_5_Artemis_IV
  | GearName.IS_LRM_10_Artemis_IV
  | GearName.IS_LRM_15_Artemis_IV
  | GearName.IS_LRM_20_Artemis_IV
  | GearName.IS_MRM_10
  | GearName.IS_MRM_20
  | GearName.IS_MRM_30
  | GearName.IS_MRM_40
  | GearName.IS_SRM_2
  | GearName.IS_SRM_4
  | GearName.IS_SRM_6
  | GearName.IS_SRM_2_Artemis_IV
  | GearName.IS_SRM_4_Artemis_IV
  | GearName.IS_SRM_6_Artemis_IV
  | GearName.IS_Streak_SRM_2
  | GearName.IS_Streak_SRM_4
  | GearName.IS_Streak_SRM_6
  | GearName.IS_MML_3
  | GearName.IS_MML_5
  | GearName.IS_MML_7
  | GearName.IS_MML_9
  | GearName.IS_MML_3_Artemis_IV
  | GearName.IS_MML_5_Artemis_IV
  | GearName.IS_MML_7_Artemis_IV
  | GearName.IS_MML_9_Artemis_IV
  | GearName.IS_Rocket_Launcher_10
  | GearName.IS_Rocket_Launcher_15
  | GearName.IS_Rocket_Launcher_20
  | GearName.IS_NARC_Launcher
  | GearName.IS_Improved_NARC_Launcher
  | GearName.C_LB_2X_Autocannon
  | GearName.C_LB_5X_Autocannon
  | GearName.C_LB_10X_Autocannon
  | GearName.C_LB_20X_Autocannon
  | GearName.C_Ultra_Autocannon_2
  | GearName.C_Ultra_Autocannon_5
  | GearName.C_Ultra_Autocannon_10
  | GearName.C_Ultra_Autocannon_20
  | GearName.C_Gauss_Rifle
  | GearName.C_AP_Gauss_Rifle
  | GearName.C_Hyper_Assault_Gauss_20
  | GearName.C_Hyper_Assault_Gauss_30
  | GearName.C_Hyper_Assault_Gauss_40
  | GearName.C_Light_Machine_Gun
  | GearName.C_Machine_Gun
  | GearName.C_Heavy_Machine_Gun
  | GearName.C_AMS
  | GearName.C_ER_Micro_Laser
  | GearName.C_ER_Small_Laser
  | GearName.C_ER_Medium_Laser
  | GearName.C_ER_Large_Laser
  | GearName.C_Micro_Pulse_Laser
  | GearName.C_Small_Pulse_Laser
  | GearName.C_Medium_Pulse_Laser
  | GearName.C_Large_Pulse_Laser
  | GearName.C_Heavy_Small_Laser
  | GearName.C_Heavy_Medium_Laser
  | GearName.C_Heavy_Large_Laser
  | GearName.C_Flamer
  | GearName.C_Vehicle_Flamer
  | GearName.C_Plasma_Cannon
  | GearName.C_ER_PPC
  | GearName.C_LAMS
  | GearName.C_LRM_5
  | GearName.C_LRM_10
  | GearName.C_LRM_15
  | GearName.C_LRM_20
  | GearName.C_LRM_5_Artemis_IV
  | GearName.C_LRM_10_Artemis_IV
  | GearName.C_LRM_15_Artemis_IV
  | GearName.C_LRM_20_Artemis_IV
  | GearName.C_SRM_2
  | GearName.C_SRM_4
  | GearName.C_SRM_6
  | GearName.C_SRM_2_Artemis_IV
  | GearName.C_SRM_4_Artemis_IV
  | GearName.C_SRM_6_Artemis_IV
  | GearName.C_Streak_SRM_2
  | GearName.C_Streak_SRM_4
  | GearName.C_Streak_SRM_6
  | GearName.C_ATM_3
  | GearName.C_ATM_6
  | GearName.C_ATM_9
  | GearName.C_ATM_12
  | GearName.C_NARC_Launcher

export type EquipmentName =
  | GearName.IS_Single_Heatsink
  | GearName.IS_Double_Heatsink
  | GearName.IS_Jump_Jet
  | GearName.IS_Improved_Jump_Jet
  | GearName.IS_Endo_Steel
  | GearName.IS_Ferro_Fibrous
  | GearName.IS_Light_Ferro
  | GearName.IS_Heavy_Ferro
  | GearName.IS_Stealth_Armor
  | GearName.IS_Beagle_Active_Probe
  | GearName.IS_CASE
  | GearName.IS_MASC
  | GearName.IS_TSM
  | GearName.IS_C3_Master_Computer
  | GearName.IS_C3_Slave_Computer
  | GearName.IS_Improved_C3_Computer
  | GearName.IS_Guardian_ECM
  | GearName.IS_Targeting_Computer
  | GearName.IS_TAG
  | GearName.C_Single_Heatsink
  | GearName.C_Double_Heatsink
  | GearName.C_Jump_Jet
  | GearName.C_Improved_Jump_Jet
  | GearName.C_Endo_Steel
  | GearName.C_Ferro_Fibrous
  | GearName.C_Active_Probe
  | GearName.C_Light_Active_Probe
  | GearName.C_MASC
  | GearName.C_ECM_Suite
  | GearName.C_Targeting_Computer
  | GearName.C_TAG
  | GearName.C_Light_TAG

export type AmmoName =
  | GearName.IS_AC2_Ammo
  | GearName.IS_AC2_AP_Ammo
  | GearName.IS_AC2_Flechette_Ammo
  | GearName.IS_AC2_Precision_Ammo
  | GearName.IS_AC5_Ammo
  | GearName.IS_AC5_AP_Ammo
  | GearName.IS_AC5_Flechette_Ammo
  | GearName.IS_AC5_Precision_Ammo
  | GearName.IS_AC10_Ammo
  | GearName.IS_AC10_AP_Ammo
  | GearName.IS_AC10_Flechette_Ammo
  | GearName.IS_AC10_Precision_Ammo
  | GearName.IS_AC20_Ammo
  | GearName.IS_AC20_AP_Ammo
  | GearName.IS_AC20_Flechette_Ammo
  | GearName.IS_AC20_Precision_Ammo
  | GearName.IS_LB_2X_AC_Ammo
  | GearName.IS_LB_2X_AC_Cluster_Ammo
  | GearName.IS_LB_5X_AC_Ammo
  | GearName.IS_LB_5X_AC_Cluster_Ammo
  | GearName.IS_LB_10X_AC_Ammo
  | GearName.IS_LB_10X_AC_Cluster_Ammo
  | GearName.IS_LB_20X_AC_Ammo
  | GearName.IS_LB_20X_AC_Cluster_Ammo
  | GearName.IS_LAC2_Ammo
  | GearName.IS_LAC2_AP_Ammo
  | GearName.IS_LAC2_Flechette_Ammo
  | GearName.IS_LAC2_Precision_Ammo
  | GearName.IS_LAC5_Ammo
  | GearName.IS_LAC5_AP_Ammo
  | GearName.IS_LAC5_Flechette_Ammo
  | GearName.IS_LAC5_Precision_Ammo
  | GearName.IS_RAC2_Ammo
  | GearName.IS_RAC5_Ammo
  | GearName.IS_UAC2_Ammo
  | GearName.IS_UAC5_Ammo
  | GearName.IS_UAC10_Ammo
  | GearName.IS_UAC20_Ammo
  | GearName.IS_Light_Gauss_Ammo
  | GearName.IS_Gauss_Ammo
  | GearName.IS_Heavy_Gauss_Ammo
  | GearName.IS_LMG_Ammo
  | GearName.IS_LMG_Half_Ammo
  | GearName.IS_MG_Ammo
  | GearName.IS_MG_Half_Ammo
  | GearName.IS_HMG_Ammo
  | GearName.IS_HMG_Half_Ammo
  | GearName.IS_AMS_Ammo
  | GearName.IS_Flamer_Ammo
  | GearName.IS_Plasma_Rifle_Ammo
  | GearName.IS_LRM_Ammo
  | GearName.IS_LRM_Artemis_Ammo
  | GearName.IS_LRM_Fragmentation_Ammo
  | GearName.IS_LRM_Incendiary_Ammo
  | GearName.IS_LRM_SWARM_Ammo
  | GearName.IS_LRM_Flare_Ammo
  | GearName.IS_MRM_Ammo
  | GearName.IS_SRM_Ammo
  | GearName.IS_SRM_Artemis_Ammo
  | GearName.IS_SRM_Fragmentation_Ammo

  | GearName.IS_SRM_Inferno_Ammo
  | GearName.IS_Streak_SRM_Ammo
  | GearName.IS_NARC_Ammo
  | GearName.IS_NARC_Explosive_Ammo
  | GearName.IS_NARC_ECM_Ammo
  | GearName.IS_NARC_Haywire_Ammo
  | GearName.IS_NARC_Nemesis_Ammo
  | GearName.C_LB_2X_AC_Ammo
  | GearName.C_LB_2X_AC_Cluster_Ammo
  | GearName.C_LB_5X_AC_Ammo
  | GearName.C_LB_5X_AC_Cluster_Ammo
  | GearName.C_LB_10X_AC_Ammo
  | GearName.C_LB_10X_AC_Cluster_Ammo
  | GearName.C_LB_20X_AC_Ammo
  | GearName.C_LB_20X_AC_Cluster_Ammo
  | GearName.C_UAC2_Ammo
  | GearName.C_UAC5_Ammo
  | GearName.C_UAC10_Ammo
  | GearName.C_UAC20_Ammo
  | GearName.C_Gauss_Ammo
  | GearName.C_AP_Gauss_Ammo
  | GearName.C_HAG_Ammo
  | GearName.C_LMG_Ammo
  | GearName.C_LMG_Half_Ammo
  | GearName.C_MG_Ammo
  | GearName.C_MG_Half_Ammo
  | GearName.C_HMG_Ammo
  | GearName.C_HMG_Half_Ammo
  | GearName.C_AMS_Ammo
  | GearName.C_Flamer_Ammo
  | GearName.C_Plasma_Cannon_Ammo
  | GearName.C_ATM_Ammo
  | GearName.C_ATM_ER_Ammo
  | GearName.C_ATM_HE_Ammo
  | GearName.C_LRM_Ammo
  | GearName.C_LRM_Artemis_Ammo
  | GearName.C_LRM_Fragmentation_Ammo
  | GearName.C_LRM_SWARM_Ammo
  | GearName.C_LRM_Flare_Ammo
  | GearName.C_SRM_Ammo
  | GearName.C_SRM_Artemis_Ammo
  | GearName.C_SRM_Fragmentation_Ammo
  | GearName.C_SRM_Inferno_Ammo
  | GearName.C_Streak_SRM_Ammo
  | GearName.C_NARC_Ammo

export type SpecialEquipmentName =
  | GearName.Cockpit
  | GearName.Sensors
  | GearName.Life_Support
  | GearName.Engine
  | GearName.Gyro
  | GearName.Shoulder_Actuator
  | GearName.Upper_Arm_Actuator
  | GearName.Lower_Arm_Actuator
  | GearName.Hand_Actuator
  | GearName.Hip_Actuator
  | GearName.Upper_Leg_Actuator
  | GearName.Lower_Leg_Actuator
  | GearName.Foot_Actuator
