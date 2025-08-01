"use client";

import { ToggleButton, Flex } from "@/once-ui/components";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            // Получаем тему из localStorage или используем светлую по умолчанию
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
            const initialTheme = savedTheme || 'light';
            
            setTheme(initialTheme);
            document.documentElement.setAttribute('data-theme', initialTheme);
        } catch (error) {
            // Fallback если localStorage недоступен
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Показываем простую заглушку до монтирования
    if (!mounted) {
        return (
            <Flex
                background="surface" 
                border="neutral-medium" 
                borderStyle="solid-1" 
                radius="m-4" 
                shadow="l"
                padding="2"
                justifyContent="center">
                <Flex paddingX="4" paddingY="2" gap="4" alignItems="center">
                    <span>🌙</span>
                    <Flex hide="s">Theme</Flex>
                </Flex>
            </Flex>
        );
    }
    
    return (
        <Flex
            background="surface" 
            border="neutral-medium" 
            borderStyle="solid-1" 
            radius="m-4" 
            shadow="l"
            padding="2"
            justifyContent="center">
            <ToggleButton
                prefixIcon={theme === 'dark' ? 'sun' : 'moon'}
                onClick={toggleTheme}
                selected={false}>
                <Flex hide="s">{theme === 'dark' ? 'Light' : 'Dark'}</Flex>
            </ToggleButton>
        </Flex>
    );
};
