import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import {
  Platform, ScrollView, StyleSheet, Text,
  TextInput, TouchableOpacity, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useColors } from '@/hooks/useColors';
import { transliterate } from '@/utils/transliterate';

export default function HomeScreen() {
  const colors = useColors();
  const [input, setInput] = useState('');
  const [copyLabel, setCopyLabel] = useState('Copy');

  const output = input.trim() ? transliterate(input) : '';

  const handleCopy = useCallback(async () => {
    if (!output) return;
    await Clipboard.setStringAsync(output);
    if (Platform.OS !== 'web') {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    setCopyLabel('Copied!');
    setTimeout(() => setCopyLabel('Copy'), 1500);
  }, [output]);

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    scroll: { flex: 1 },
    scrollContent: {
      padding: 24,
      paddingTop: Platform.OS === 'web' ? 67 + 24 : 24,
      paddingBottom: Platform.OS === 'web' ? 34 + 24 : 48,
    },
    title: {
      fontSize: 32, fontWeight: '700' as const,
      color: colors.foreground, fontFamily: 'Inter_700Bold', marginBottom: 4,
    },
    subtitle: {
      fontSize: 14, color: colors.mutedForeground,
      fontFamily: 'Inter_400Regular', marginBottom: 32,
    },
    label: {
      fontSize: 11, color: colors.mutedForeground,
      fontFamily: 'Inter_500Medium', letterSpacing: 0.8, marginBottom: 8,
    },
    input: {
      width: '100%', height: 140, backgroundColor: colors.card,
      borderWidth: 1, borderColor: colors.border, borderRadius: colors.radius,
      color: colors.foreground, fontSize: 18, fontFamily: 'Inter_400Regular',
      padding: 16, marginBottom: 24, textAlignVertical: 'top',
    },
    outputCard: {
      backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border,
      borderRadius: colors.radius, padding: 16, minHeight: 100,
      marginBottom: 16, justifyContent: 'flex-start',
    },
    outputText: { fontSize: 28, color: colors.foreground, lineHeight: 42 },
    outputPlaceholder: {
      fontSize: 16, color: colors.mutedForeground,
      fontFamily: 'Inter_400Regular', lineHeight: 28,
    },
    row: { flexDirection: 'row' as const, gap: 12, marginBottom: 32 },
    copyBtn: {
      flex: 1, borderWidth: 1, borderColor: colors.border,
      borderRadius: colors.radius, paddingVertical: 12,
      alignItems: 'center' as const, backgroundColor: 'transparent',
    },
    copyBtnActive: { borderColor: colors.foreground },
    copyBtnText: { color: colors.mutedForeground, fontSize: 15, fontFamily: 'Inter_500Medium' },
    copyBtnTextActive: { color: colors.foreground },
    controlsBtn: { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 24, marginTop: 8 },
    controlsText: { color: colors.mutedForeground, fontSize: 14, fontFamily: 'Inter_400Regular' },
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Lipi</Text>
        <Text style={styles.subtitle}>Type phonetic English, get Gujarati script instantly.</Text>

        <Text style={styles.label}>TYPE HERE</Text>
        <TextInput style={styles.input} placeholder="e.g. k`em chh`o"
          placeholderTextColor={colors.mutedForeground} value={input}
          onChangeText={setInput} multiline textAlignVertical="top"
          autoCorrect={false} autoCapitalize="none" autoComplete="off" />

        <Text style={styles.label}>GUJARATI</Text>
        <View style={styles.outputCard}>
          {output
            ? <Text style={styles.outputText}>{output}</Text>
            : <Text style={styles.outputPlaceholder}>Your transliteration will appear here</Text>}
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.copyBtn, output ? styles.copyBtnActive : null]}
            onPress={handleCopy} activeOpacity={0.6} disabled={!output}>
            <Text style={[styles.copyBtnText, output ? styles.copyBtnTextActive : null]}>
              {copyLabel}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.controlsBtn} onPress={() => router.push('/controls')} activeOpacity={0.6}>
          <Text style={styles.controlsText}>Controls reference →</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}