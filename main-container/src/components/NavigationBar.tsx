import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/images/fixed/logo2.png';
// Styled Components
const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 0 16px;
  background: linear-gradient(94deg, #2a49e5 1.69%, #6751e0 116.61%);
`;
const HomeImageWrapper = styled.div`
  position: relative; width: 150px; height: 50px;
`;
const HomeImage = styled.img`
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%; object-fit: contain;
`;
const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const LogoImage = styled.div`
  width: 150px;
  height: 50px;
    background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const NavLinks = styled.nav<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  align-items: center;
  gap: 16px;
  flex-grow: 1;
  justify-content: center;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0 10px;
  cursor: pointer;
 
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.25);
    outline: none;
  }
`;

const AuthButton = styled(NavButton)`
  font-weight: 700;
  border: 1px solid white;
  margin-right: 16px;
`;

const MenuIcon = styled.div<{ isMobile: boolean }>`
  display: ${({ isMobile }) => (isMobile ? 'block' : 'none')};
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 72px;
  right: 16px;
  background: rgba(0, 0, 0, 0.25);
  border: 3px solid white;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

// Component
export const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // TODO: replace with real auth logic
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token);
        setIsAdmin(localStorage.getItem('loginType') === 'GITHUB');
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('loginType');
        setIsLoggedIn(false);
        navigate('/');
    };

    const commonLinks = [
        { label: 'HOME', path: '/' },
        { label: 'COMPANY REPORT', path: '/company-report/list' },
        { label: 'AI INTERVIEW', path: '/ai-interview/llm-test' },
        { label: 'MEMBERSHIP', path: '/membership/plans' },
    ];

    const userLinks = [
        { label: 'REVIEW', path: '/review/list' },
    ];

    const myPageItems = [
        { label: '회원 정보', path: '/account/mypage' },
        { label: '장바구니', path: '/cart/list' },
        { label: '주문 목록', path: '/order/list' },
    ];

    const adminItems = [
        { label: '사용자 관리', path: '/management/user' },
        { label: '로그 현황', path: '/management/log' },
        { label: 'GO서버 호출', path: '/admin/default' },
    ];

    const renderLinks = () => (
        <>
            {commonLinks.map((link) => (
                <NavButton key={link.label} onClick={() => navigate(link.path)}>
                    {link.label}
                </NavButton>
            ))}
            {isLoggedIn && userLinks.map((link) => (
                <NavButton key={link.label} onClick={() => navigate(link.path)}>
                    {link.label}
                </NavButton>
            ))}
        </>
    );

    return (
        <AppBar>
            <LogoButton onClick={() => navigate('/')}>
                <LogoImage />
            </LogoButton>

            <NavLinks isMobile={isMobile}>
                {renderLinks()}

                {isLoggedIn && (
                    <NavButton onClick={() => setMenuOpen((o) => !o)}>
                        My Page
                    </NavButton>
                )}
                {isAdmin && (
                    <NavButton onClick={() => setMenuOpen((o) => !o)}>
                        Admin
                    </NavButton>
                )}

                {!isLoggedIn ? (
                    <AuthButton onClick={() => navigate('/account/login')}>LOGIN</AuthButton>
                ) : (
                    <AuthButton onClick={handleSignOut}>LOGOUT</AuthButton>
                )}
            </NavLinks>

            <MenuIcon isMobile={isMobile} onClick={() => setMenuOpen((o) => !o)}>
                <FiMenu size={24} color="white" />
            </MenuIcon>

            {menuOpen && (
                <Dropdown>
                    {isLoggedIn && !isAdmin && (
                        myPageItems.map((item) => (
                            <DropdownItem key={item.label} onClick={() => navigate(item.path)}>
                                {item.label}
                            </DropdownItem>
                        ))
                    )}
                    {isAdmin && (
                        adminItems.map((item) => (
                            <DropdownItem key={item.label} onClick={() => navigate(item.path)}>
                                {item.label}
                            </DropdownItem>
                        ))
                    )}
                    {commonLinks.concat(
                        !isLoggedIn ? [{ label: 'LOGIN', path: '/account/login' }] : [{ label: 'LOGOUT', path: '/' }]
                    ).map((item) => (
                        <DropdownItem
                            key={item.label}
                            onClick={() => {
                                if (item.label === 'LOGOUT') handleSignOut(); else navigate(item.path);
                            }}
                        >
                            {item.label}
                        </DropdownItem>
                    ))}
                </Dropdown>
            )}
        </AppBar>
    );
};
