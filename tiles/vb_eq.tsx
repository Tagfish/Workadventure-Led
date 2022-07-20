<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="2021.02.15" name="Eqipment" tilewidth="32" tileheight="32" tilecount="120" columns="10">
 <image source="eqipment.png" width="320" height="384"/>
 <tile id="0">
  <animation>
   <frame tileid="40" duration="1000"/>
   <frame tileid="50" duration="1000"/>
  </animation>
 </tile>
 <tile id="12">
  <properties>
   <property name="collides" type="bool" value="false"/>
  </properties>
 </tile>
 <tile id="20">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="21">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="24">
  <objectgroup draworder="index">
   <object id="1" x="16.4168" y="-1.78628" width="16.9272" height="34.3647"/>
  </objectgroup>
 </tile>
 <tile id="26">
  <properties>
   <property name="collides" type="bool" value="false"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="20.5848" y="6.03934" width="11.3982" height="25.9436"/>
  </objectgroup>
 </tile>
 <tile id="27">
  <objectgroup draworder="index">
   <object id="1" x="-1.02073" y="4.67836" width="8.33599" height="28.4104"/>
  </objectgroup>
 </tile>
 <tile id="36">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="19.9043" y="-1.36098" width="12.6741" height="22.6263"/>
  </objectgroup>
 </tile>
 <tile id="37">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" x="-0.595428" y="-1.02073" width="7.99575" height="22.5412"/>
  </objectgroup>
 </tile>
 <tile id="64">
  <animation>
   <frame tileid="40" duration="1000"/>
   <frame tileid="50" duration="1000"/>
  </animation>
 </tile>
</tileset>
