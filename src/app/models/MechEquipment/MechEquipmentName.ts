export enum MechEquipmentName {
  /***********************/
  /*  General Equipment  */
  /***********************/
  None = 'None',
  Cockpit = 'Cockpit',
  Sensors = 'Sensors',
  Life_Support = 'Life Support',
  Engine = 'Engine',
  Gyro = 'Gyro',
  Internal_Structure = 'Internal Structure',
  Armor = 'Armor',
  Shoulder_Actuator = 'Shoulder Actuator',
  Upper_Arm_Actuator = 'Upper Arm Actuator',
  Lower_Arm_Actuator = 'Lower Arm Actuator',
  Hand_Actuator = 'Hand Actuator',
  Hip_Actuator = 'Hip Actuator',
  Upper_Leg_Actuator = 'Upper Leg Actuator',
  Lower_Leg_Actuator = 'Lower Leg Actuator',
  Foot_Actuator = 'Foot Actuator',
  Jump_Jet = 'Jump Jet',
  Improved_Jump_Jet = 'Improved Jump Jet',

  /***********************/
  /*  Inner Sphere tech  */
  /***********************/
  // Energy * Lasers
  ER_Small_Laser = 'ER Small Laser',
  ER_Medium_Laser = 'ER Medium Laser',
  ER_Large_Laser = 'ER Large Laser',
  Small_Laser = 'Small Laser',
  Medium_Laser = 'Medium Laser',
  Large_Laser = 'Large Laser',
  Small_Pulse_Laser = 'Small Pulse Laser',
  Medium_Pulse_Laser = 'Medium Pulse Laser',
  Large_Pulse_Laser = 'Large Pulse Laser',

  // Energy * Flamers
  Flamer = 'Flamer',
  Vehicle_Flamer = 'Vehicle Flamer',

  // Energy * Plasma weapons
  Plasma_Rifle = 'Plasma Rifle',

  // Energy * PPCs
  Light_PPC = 'Light PPC',
  PPC = 'PPC',
  Heavy_PPC = 'Heavy PPC',
  ER_PPC = 'ER PPC',
  Snub_Nose_PPC = 'Snub-Nose PPC',

  // Ballistic * Autocannons
  Autocannon_2 = 'Autocannon/2',
  Autocannon_5 = 'Autocannon/5',
  Autocannon_10 = 'Autocannon/10',
  Autocannon_20 = 'Autocannon/20',

  LB_2X_Autocannon = 'LB 2-X Autocannon',
  LB_5X_Autocannon = 'LB 5-X Autocannon',
  LB_10X_Autocannon = 'LB 10-X Autocannon',
  LB_20X_Autocannon = 'LB 20-X Autocannon',

  Light_Autocannon_2 = 'Light Autocannon/2',
  Light_Autocannon_5 = 'Light Autocannon/5',

  Rotary_Autocannon_2 = 'Rotary Autocannon/2',
  Rotary_Autocannon_5 = 'Rotary Autocannon/5',

  Ultra_Autocannon_2 = 'Ultra Autocannon/2',
  Ultra_Autocannon_5 = 'Ultra Autocannon/5',
  Ultra_Autocannon_10 = 'Ultra Autocannon/10',
  Ultra_Autocannon_20 = 'Ultra Autocannon/20',

  // Ballistic * Gauss rifles
  Light_Gauss_Rifle = 'Light Gauss Rifle',
  Gauss_Rifle = 'Gauss Rifle',
  Heavy_Gauss_Rifle = 'Heavy Gauss Rifle',

  // Ballistic * Machine Guns
  Light_Machine_Gun = 'Light Machine Gun',
  Machine_Gun = 'Machine Gun',
  Heavy_Machine_Gun = 'Heavy Machine Gun',

  // Missile * LRM
  LRM_5 = 'LRM 5',
  LRM_10 = 'LRM 10',
  LRM_15 = 'LRM 15',
  LRM_20 = 'LRM 20',

  // Missile * MML
  MML_3 = 'MML 3',
  MML_5 = 'MML 5',
  MML_7 = 'MML 7',
  MML_9 = 'MML 9',

  // Missile * SRM
  SRM_2 = 'SRM 2',
  SRM_4 = 'SRM 4',
  SRM_6 = 'SRM 6',
  Streak_SRM_2 = 'Streak SRM 2',
  Streak_SRM_4 = 'Streak SRM 4',
  Streak_SRM_6 = 'Streak SRM 6',

  // Missile * MRM,
  MRM_10 = 'MRM 10',
  MRM_20 = 'MRM 20',
  MRM_30 = 'MRM 30',
  MRM_40 = 'MRM 40',

  // Missile * Rocket Launcher
  Rocket_Launcher_10 = 'Rocket Launcher 10',
  Rocket_Launcher_15 = 'Rocket Launcher 15',
  Rocket_Launcher_20 = 'Rocket Launcher 20',

  // Equipment
  AMS = 'AMS',
  LAMS = 'LAMS',
  Beagle_Active_Probe = 'Beagle Active Probe',
  CASE = 'CASE',
  C3_Computer_Master = 'C3 Computer - Master',
  C3_Computer_Slave = 'C3 Computer - Slave',
  Improved_C3_Computer = 'Improved C3 Computer',
  Guardian_ECM_Suite = 'Guardian ECM Suite',
  MASC = 'MASC',
  Narc_Launcher = 'NarcLauncher',
  Improved_Narc_Launcher = 'Imporved Narc Launcher',
  TAG = 'TAG',
  Targeting_Computer = 'Targeting Computer',
  Artemis_IV = 'Artemis IV',

  /***************/
  /*  Clan tech  */
  /***************/
  // Energy * Lasers
  C_ER_Micro_Laser = 'Clan ER Micro Laser',
  C_ER_Small_Laser = 'Clan ER Small Laser',
  C_ER_Medium_Laser = 'Clan ER Medium Laser',
  C_ER_Large_Laser = 'Clan ER Large Laser',
  C_Micro_Pulse_Laser = 'Clan Micro Pulse Laser',
  C_Small_Pulse_Laser = 'Clan Small Pulse Laser',
  C_Medium_Pulse_Laser = 'Clan Medium Pulse Laser',
  C_Large_Pulse_Laser = 'Clan Large Pulse Laser',
  C_Heavy_Small_Laser = 'Clan Heavy Small Laser',
  C_Heavy_Medium_Laser = 'Clan Heavy Medium Laser',
  C_Heavy_Large_Laser = 'Clan Heavy Large Laser',

  // Energy * Flamers
  C_Flamer = 'Clan Flamer',
  C_Vehicle_Flamer = 'Clan Vehicle Flamer',

  // Energy * Plasma Weapons
  C_Plasma_Cannon = 'Clan Plasma Cannon',

  // Energy * PPCs
  C_ER_PPC = 'Clan ER PPC',

  // Ballistic * Autocannon
  C_Autocannon_2 = 'Clan Autocannon/2',
  C_Autocannon_5 = 'Clan Autocannon/5',
  C_Autocannon_10 = 'Clan Autocannon/10',
  C_Autocannon_20 = 'Clan Autocannon/20',

  C_LB_2X_Autocannon = 'Clan LB 2-X Autocannon',
  C_LB_5X_Autocannon = 'Clan LB 5-X Autocannon',
  C_LB_10X_Autocannon = 'Clan LB 10-X Autocannon',
  C_LB_20X_Autocannon = 'Clan LB 20-X Autocannon',

  C_Ultra_Autocannon_2 = 'Clan Ultra Autocannon/2',
  C_Ultra_Autocannon_5 = 'Clan Ultra Autocannon/5',
  C_Ultra_Autocannon_10 = 'Clan Ultra Autocannon/10',
  C_Ultra_Autocannon_20 = 'Clan Ultra Autocannon/20',

  // Ballistic * Gauss Rifles
  C_AP_Gauss_Rifle = 'Clan AP Gauss Rifle',
  C_Gauss_Rifle = 'Clan Gauss Rifle',
  C_Hyper_Assault_Gauss_20 = 'Clan Hyper-Assault Gauss Rifle 20',
  C_Hyper_Assault_Gauss_30 = 'Clan Hyper-Assault Gauss Rifle 30',
  C_Hyper_Assault_Gauss_40 = 'Clan Hyper-Assault Gauss Rifle 40',

  // Ballistic * Machine Guns
  C_Light_Machine_Gun = 'Clan Light Machine Gun',
  C_Machine_Gun = 'Clan Machine Gun',
  C_Heavy_Machine_Gun = 'Clan Heavy Machine Gun',

  // Missiles * ATM
  C_ATM_3 = 'Clan ATM 3',
  C_ATM_6 = 'Clan ATM 6',
  C_ATM_9 = 'Clan ATM 9',
  C_ATM_12 = 'Clan ATM 12',

  // Missiles * LRM
  C_LRM_5 = 'Clan LRM 5',
  C_LRM_10 = 'Clan LRM 10',
  C_LRM_15 = 'Clan LRM 15',
  C_LRM_20 = 'Clan LRM 20',

  // Missiles * SRM
  C_SRM_2 = 'Clan SRM 2',
  C_SRM_4 = 'Clan SRM 4',
  C_SRM_6 = 'Clan SRM 6',
  C_Streak_SRM_2 = 'Clan Streak SRM 2',
  C_Streak_SRM_4 = 'Clan Streak SRM 4',
  C_Streak_SRM_6 = 'Clan Streak SRM 6',

  // Equipment
  C_AMS = 'Clan AMS',
  C_LAMS = 'Clan LAMS',
  C_Active_Probe = 'Clan Active Probe',
  C_Light_Active_Probe = 'Clan Light Active Probe',
  C_ECM_Suite = 'Clan ECM Suite',
  C_MASC = 'Clan MASC',
  C_TAG = 'Clan TAG',
  C_Light_TAG = 'Clan Light TAG',
  C_Targeting_Computer = 'Clan Targeting Computer',
  C_Artemis_IV = 'Clan Artemis IV',

  // Ammo
  // Energy * Ammo
  Vehicle_Flamer_Ammo = 'Vehicle Flamer Ammo',
  Plasma_Cannon_Ammo = 'Plasma Cannon Ammo',
  Plasma_Rifle_Ammo = 'Plasma Rifle Ammo',

  // Ballistic * Ammo
  Autocannon_Ammo = 'Autocannon Ammo',
  Autocannon_Armor_Piercing_Ammo = 'Autocannon Armor Piercing Ammo',
  Autocannon_Flechette_Ammo = 'Autocannon Flechette Ammo',
  Autocannon_Precision_Ammo = 'Autocannon Precision Ammo',

  LB_X_Autocannon_Ammo = 'LB-X Autocannon Ammo',
  LB_X_Autocannon_Cluster_Ammo = 'LB-X Autocannon Cluster  Ammo',

  Light_Autocannon_Ammo = 'Light Autocannon Ammo',
  Light_Autocannon_Armor_Piercing_Ammo = 'Light Autocannon Armor Piercing Ammo',
  Light_Autocannon_Flechette_Ammo = 'Light Autocannon Flechette Ammo',
  Light_Autocannon_Precision_Ammo = 'Light Autocannon Precision Ammo',

  Rotary_Autocannon_Ammo = 'Rotary Autocannon Ammo',
  Ultra_Autocannon_Ammo = 'Ultra Autocannon Ammo',

  Light_Gauss_Ammo = 'Light Gauss Ammo',
  Gauss_Ammo = 'Gauss Ammo',
  Heavy_Gauss_Ammo = 'Heavy Gauss Ammo',
  AP_Gauss_Ammo = 'AP Gauss Ammo',
  Hyper_Assault_Gauss_Ammo = 'Hyper-Assault Gauss Ammo',

  Light_Machine_Gun_Ammo = 'Light Machine Gun Ammo',
  Machine_Gun_Ammo = 'Machine Gun Ammo',
  Heavy_Machine_Gun_Ammo = 'Heavy Machine Gun Ammo',

  // Missile * Ammo
  LRM_Ammo = 'LRM Ammo',
  LRM_Fragmentation_Ammo = 'LRM Fragmentation Ammo',
  LRM_Incendiary_Ammo = 'LRM Incendiary Ammo',
  LRM_SWARM_Ammo = 'LRM SWARM Ammo',
  LRM_Flare_Ammo = 'LRM Flare Ammo',

  SRM_Ammo = 'SRM Ammo',
  SRM_Fragmentation_Ammo = 'SRM Fragmentation Ammo',
  SRM_Harpoon_Ammo = 'SRM Harpoon Ammo',
  SRM_Inferno_Ammo = 'SRM Inferno Ammo',
  Streak_SRM_Ammo = 'Streak SRM Ammo',

  MRM_Ammo = 'MRM Ammo',

  ATM_Ammo = 'ATM Ammo',
  ATM_ER_Ammo = 'ATM ER Ammo',
  ATM_HE_Ammo = 'ATM HE Ammo',

  AMS_Ammo = 'AMS Ammo',

  NARC_Ammo = 'Narc Ammo',
  NARC_Explosive_Ammo = 'Narc Explosive Ammo',
  NARC_ECM_Ammo = 'Narc ECM Ammo',
  NARC_Haywire_Ammo = 'Narc Haywire Ammo',
  NARC_Nemesis_Ammo = 'Narc Nemesis Ammo',
}

export type WeaponType =
  | MechEquipmentName.ER_Small_Laser
  | MechEquipmentName.ER_Medium_Laser
  | MechEquipmentName.ER_Large_Laser
  | MechEquipmentName.Small_Laser
  | MechEquipmentName.Medium_Laser
  | MechEquipmentName.Large_Laser
  | MechEquipmentName.Small_Pulse_Laser
  | MechEquipmentName.Medium_Pulse_Laser
  | MechEquipmentName.Large_Pulse_Laser
  | MechEquipmentName.Flamer
  | MechEquipmentName.Vehicle_Flamer
  | MechEquipmentName.Plasma_Rifle
  | MechEquipmentName.Light_PPC
  | MechEquipmentName.PPC
  | MechEquipmentName.Heavy_PPC
  | MechEquipmentName.ER_PPC
  | MechEquipmentName.Snub_Nose_PPC
  | MechEquipmentName.Autocannon_2
  | MechEquipmentName.Autocannon_5
  | MechEquipmentName.Autocannon_10
  | MechEquipmentName.Autocannon_20
  | MechEquipmentName.LB_2X_Autocannon
  | MechEquipmentName.LB_5X_Autocannon
  | MechEquipmentName.LB_10X_Autocannon
  | MechEquipmentName.LB_20X_Autocannon
  | MechEquipmentName.Light_Autocannon_2
  | MechEquipmentName.Light_Autocannon_5
  | MechEquipmentName.Rotary_Autocannon_2
  | MechEquipmentName.Rotary_Autocannon_5
  | MechEquipmentName.Ultra_Autocannon_2
  | MechEquipmentName.Ultra_Autocannon_5
  | MechEquipmentName.Ultra_Autocannon_10
  | MechEquipmentName.Ultra_Autocannon_20
  | MechEquipmentName.Light_Gauss_Rifle
  | MechEquipmentName.Gauss_Rifle
  | MechEquipmentName.Heavy_Gauss_Rifle
  | MechEquipmentName.Light_Machine_Gun
  | MechEquipmentName.Machine_Gun
  | MechEquipmentName.Heavy_Machine_Gun
  | MechEquipmentName.LRM_5
  | MechEquipmentName.LRM_10
  | MechEquipmentName.LRM_15
  | MechEquipmentName.LRM_20
  | MechEquipmentName.MML_3
  | MechEquipmentName.MML_5
  | MechEquipmentName.MML_7
  | MechEquipmentName.MML_9
  | MechEquipmentName.SRM_2
  | MechEquipmentName.SRM_4
  | MechEquipmentName.SRM_6
  | MechEquipmentName.Streak_SRM_2
  | MechEquipmentName.Streak_SRM_4
  | MechEquipmentName.Streak_SRM_6
  | MechEquipmentName.MRM_10
  | MechEquipmentName.MRM_20
  | MechEquipmentName.MRM_30
  | MechEquipmentName.MRM_40
  | MechEquipmentName.Rocket_Launcher_10
  | MechEquipmentName.Rocket_Launcher_15
  | MechEquipmentName.Rocket_Launcher_20
  | MechEquipmentName.C_ER_Micro_Laser
  | MechEquipmentName.C_ER_Small_Laser
  | MechEquipmentName.C_ER_Medium_Laser
  | MechEquipmentName.C_ER_Large_Laser
  | MechEquipmentName.C_Micro_Pulse_Laser
  | MechEquipmentName.C_Small_Pulse_Laser
  | MechEquipmentName.C_Medium_Pulse_Laser
  | MechEquipmentName.C_Large_Pulse_Laser
  | MechEquipmentName.C_Heavy_Small_Laser
  | MechEquipmentName.C_Heavy_Medium_Laser
  | MechEquipmentName.C_Heavy_Large_Laser
  | MechEquipmentName.C_Flamer
  | MechEquipmentName.C_Vehicle_Flamer
  | MechEquipmentName.C_Plasma_Cannon
  | MechEquipmentName.C_ER_PPC
  | MechEquipmentName.C_Autocannon_2
  | MechEquipmentName.C_Autocannon_5
  | MechEquipmentName.C_Autocannon_10
  | MechEquipmentName.C_Autocannon_20
  | MechEquipmentName.C_LB_2X_Autocannon
  | MechEquipmentName.C_LB_5X_Autocannon
  | MechEquipmentName.C_LB_10X_Autocannon
  | MechEquipmentName.C_LB_20X_Autocannon
  | MechEquipmentName.C_Ultra_Autocannon_2
  | MechEquipmentName.C_Ultra_Autocannon_5
  | MechEquipmentName.C_Ultra_Autocannon_10
  | MechEquipmentName.C_Ultra_Autocannon_20
  | MechEquipmentName.C_AP_Gauss_Rifle
  | MechEquipmentName.C_Gauss_Rifle
  | MechEquipmentName.C_Hyper_Assault_Gauss_20
  | MechEquipmentName.C_Hyper_Assault_Gauss_30
  | MechEquipmentName.C_Hyper_Assault_Gauss_40
  | MechEquipmentName.C_Light_Machine_Gun
  | MechEquipmentName.C_Machine_Gun
  | MechEquipmentName.C_Heavy_Machine_Gun
  | MechEquipmentName.C_ATM_3
  | MechEquipmentName.C_ATM_6
  | MechEquipmentName.C_ATM_9
  | MechEquipmentName.C_ATM_12
  | MechEquipmentName.C_LRM_5
  | MechEquipmentName.C_LRM_10
  | MechEquipmentName.C_LRM_15
  | MechEquipmentName.C_LRM_20
  | MechEquipmentName.C_SRM_2
  | MechEquipmentName.C_SRM_4
  | MechEquipmentName.C_SRM_6
  | MechEquipmentName.C_Streak_SRM_2
  | MechEquipmentName.C_Streak_SRM_4
  | MechEquipmentName.C_Streak_SRM_6

export type EquipmentType =
  | MechEquipmentName.AMS
  | MechEquipmentName.LAMS
  | MechEquipmentName.Beagle_Active_Probe
  | MechEquipmentName.CASE
  | MechEquipmentName.C3_Computer_Master
  | MechEquipmentName.C3_Computer_Slave
  | MechEquipmentName.Improved_C3_Computer
  | MechEquipmentName.Guardian_ECM_Suite
  | MechEquipmentName.MASC
  | MechEquipmentName.Narc_Launcher
  | MechEquipmentName.Improved_Narc_Launcher
  | MechEquipmentName.TAG
  | MechEquipmentName.Artemis_IV
  | MechEquipmentName.Targeting_Computer
  | MechEquipmentName.C_AMS
  | MechEquipmentName.C_LAMS
  | MechEquipmentName.C_Active_Probe
  | MechEquipmentName.C_Light_Active_Probe
  | MechEquipmentName.C_ECM_Suite
  | MechEquipmentName.C_MASC
  | MechEquipmentName.C_TAG
  | MechEquipmentName.C_Light_TAG
  | MechEquipmentName.C_Targeting_Computer
  | MechEquipmentName.C_Artemis_IV

export type AmmoType =
  | MechEquipmentName.Vehicle_Flamer_Ammo
  | MechEquipmentName.Plasma_Cannon_Ammo
  | MechEquipmentName.Plasma_Rifle_Ammo
  | MechEquipmentName.Autocannon_Ammo
  | MechEquipmentName.Autocannon_Armor_Piercing_Ammo
  | MechEquipmentName.Autocannon_Flechette_Ammo
  | MechEquipmentName.Autocannon_Precision_Ammo
  | MechEquipmentName.LB_X_Autocannon_Ammo
  | MechEquipmentName.LB_X_Autocannon_Cluster_Ammo
  | MechEquipmentName.Light_Autocannon_Ammo
  | MechEquipmentName.Light_Autocannon_Armor_Piercing_Ammo
  | MechEquipmentName.Light_Autocannon_Flechette_Ammo
  | MechEquipmentName.Light_Autocannon_Precision_Ammo
  | MechEquipmentName.Rotary_Autocannon_Ammo
  | MechEquipmentName.Ultra_Autocannon_Ammo
  | MechEquipmentName.Light_Gauss_Ammo
  | MechEquipmentName.Gauss_Ammo
  | MechEquipmentName.Heavy_Gauss_Ammo
  | MechEquipmentName.AP_Gauss_Ammo
  | MechEquipmentName.Hyper_Assault_Gauss_Ammo
  | MechEquipmentName.Light_Machine_Gun_Ammo
  | MechEquipmentName.Machine_Gun_Ammo
  | MechEquipmentName.Heavy_Machine_Gun_Ammo
  | MechEquipmentName.LRM_Ammo
  | MechEquipmentName.LRM_Fragmentation_Ammo
  | MechEquipmentName.LRM_Incendiary_Ammo
  | MechEquipmentName.LRM_SWARM_Ammo
  | MechEquipmentName.LRM_Flare_Ammo
  | MechEquipmentName.SRM_Ammo
  | MechEquipmentName.SRM_Fragmentation_Ammo
  | MechEquipmentName.SRM_Harpoon_Ammo
  | MechEquipmentName.SRM_Inferno_Ammo
  | MechEquipmentName.Streak_SRM_Ammo
  | MechEquipmentName.MRM_Ammo
  | MechEquipmentName.ATM_Ammo
  | MechEquipmentName.ATM_ER_Ammo
  | MechEquipmentName.ATM_HE_Ammo
  | MechEquipmentName.AMS_Ammo
  | MechEquipmentName.NARC_Ammo
  | MechEquipmentName.NARC_Explosive_Ammo
  | MechEquipmentName.NARC_ECM_Ammo
  | MechEquipmentName.NARC_Haywire_Ammo
  | MechEquipmentName.NARC_Nemesis_Ammo