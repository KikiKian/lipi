import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useColors } from '@/hooks/useColors';

const SECTIONS = [
  {
    title: 'Vowels',
    rows: [
      { roman: 'a', gujarati: 'અ' }, { roman: 'aa', gujarati: 'આ' },
      { roman: 'i', gujarati: 'ઇ' }, { roman: 'ii', gujarati: 'ઈ' },
      { roman: 'u', gujarati: 'ઉ' }, { roman: 'uu', gujarati: 'ઊ' },
      { roman: 'e', gujarati: 'એ' }, { roman: 'ai', gujarati: 'ઐ' },
      { roman: 'o', gujarati: 'ઓ' }, { roman: 'au', gujarati: 'ઔ' },
    ],
  },
  {
    title: 'Matras (after consonant, prefix with `)',
    rows: [
      { roman: '`aa', gujarati: 'ા' }, { roman: '`i', gujarati: 'િ' },
      { roman: '`ii', gujarati: 'ી' }, { roman: '`u', gujarati: 'ુ' },
      { roman: '`uu', gujarati: 'ૂ' }, { roman: '`e', gujarati: 'ે' },
      { roman: '`ai', gujarati: 'ૈ' }, { roman: '`o', gujarati: 'ો' },
      { roman: '`au', gujarati: 'ૌ' },
    ],
  },
  {
    title: 'Consonants',
    rows: [
      { roman: 'k', gujarati: 'ક' }, { roman: 'kh', gujarati: 'ખ' },
      { roman: 'g', gujarati: 'ગ' }, { roman: 'gh', gujarati: 'ઘ' },
      { roman: 'ng', gujarati: 'ઙ' }, { roman: 'ch', gujarati: 'ચ' },
      { roman: 'chh', gujarati: 'છ' }, { roman: 'j', gujarati: 'જ' },
      { roman: 'jh', gujarati: 'ઝ' }, { roman: 'ny', gujarati: 'ઞ' },
      { roman: 'T', gujarati: 'ટ' }, { roman: 'Th', gujarati: 'ઠ' },
      { roman: 'D', gujarati: 'ડ' }, { roman: 'Dh', gujarati: 'ઢ' },
      { roman: 'N', gujarati: 'ણ' }, { roman: 't', gujarati: 'ત' },
      { roman: 'th', gujarati: 'થ' }, { roman: 'd', gujarati: 'દ' },
      { roman: 'dh', gujarati: 'ધ' }, { roman: 'n', gujarati: 'ન' },
      { roman: 'p', gujarati: 'પ' }, { roman: 'ph', gujarati: 'ફ' },
      { roman: 'b', gujarati: 'બ' }, { roman: 'bh', gujarati: 'ભ' },
      { roman: 'm', gujarati: 'મ' }, { roman: 'y', gujarati: 'ય' },
      { roman: 'r', gujarati: 'ર' }, { roman: 'l', gujarati: 'લ' },
      { roman: 'v', gujarati: 'વ' }, { roman: 'sh', gujarati: 'શ' },
      { roman: 'Sh', gujarati: 'ષ' }, { roman: 's', gujarati: 'સ' },
      { roman: 'h', gujarati: 'હ' }, { roman: 'L', gujarati: 'ળ' },
      { roman: 'ksh', gujarati: 'ક્ષ' }, { roman: 'gny', gujarati: 'જ્ઞ' },
    ],
  },
];

export default function ControlsScreen() {
  const colors = useColors();

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: {
      flexDirection: 'row' as const, alignItems: 'center' as const,
      paddingHorizontal: 20,
      paddingTop: Platform.OS === 'web' ? 67 + 16 : 16,
      paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: colors.border,
    },
    backBtn: { marginRight: 12, padding: 4 },
    headerTitle: {
      fontSize: 18, fontWeight: '600' as const,
      color: colors.foreground, fontFamily: 'Inter_600SemiBold',
    },
    scroll: { flex: 1 },
    scrollContent: {
      padding: 20,
      paddingBottom: Platform.OS === 'web' ? 34 + 24 : 48,
    },
    section: { marginBottom: 32 },
    sectionTitle: {
      fontSize: 11, color: colors.mutedForeground,
      fontFamily: 'Inter_500Medium', letterSpacing: 0.8, marginBottom: 12,
    },
    row: {
      flexDirection: 'row' as const, justifyContent: 'space-between' as const,
      alignItems: 'center' as const, paddingVertical: 10,
      borderBottomWidth: 1, borderBottomColor: colors.border,
    },
    romanText: { fontSize: 15, color: colors.mutedForeground, fontFamily: 'Inter_400Regular' },
    gujaratiText: { fontSize: 22, color: colors.foreground },
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()} activeOpacity={0.6}>
          <Feather name="arrow-left" size={22} color={colors.mutedForeground} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Controls Reference</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title.toUpperCase()}</Text>
            {section.rows.map((row) => (
              <View key={row.roman} style={styles.row}>
                <Text style={styles.romanText}>{row.roman}</Text>
                <Text style={styles.gujaratiText}>{row.gujarati}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}